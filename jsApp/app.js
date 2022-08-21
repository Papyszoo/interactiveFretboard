(function() {
    const root = document.documentElement;

    const fretboard = document.querySelector('.fretboard');
    const instrumentSelector = document.querySelector('#instrument-selector');
    const accidentalsSelector = document.querySelector('.accidental-selector');
    const numberOfFretsSelector = document.querySelector('#number-of-frets');
    const showAllNotesSelector = document.querySelector('#show-all-notes');
    const showMultipleNotesSelector = document.querySelector('#show-multiple-notes');
    const noteNameSection = document.querySelector('.note-name-section');
    const singleFretMarkPositions = [3, 5, 7, 9, 15, 19, 21];
    const doubleFretMarkPositions = [12, 24];
    const notesFlat = ["C","Des","D","Es","E","F","Ges","G","As","A","B","H"];
    const notesSharp = ["C","Cis","D","Dis","E","F","Fis","G","Gis","A","Ais","H"];
    const instrumentTuningPresets = {
        'Guitar': [4, 11, 7, 2, 9, 4],
        'Bass (4 strings)': [7, 2, 9, 4],
        'Bass (5 strings)': [7, 2, 9, 4, 11],
        'Ukulele': [9, 4, 0, 7]
    }

    let allNotes;
    let showMultipleNotes = false;
    let showAllNotes = false;
    let numberOfFrets = 20;
    let accidentals = 'sharps';
    let selectedInstrument = 'Guitar';
    let numberOfStrings = instrumentTuningPresets[selectedInstrument].length;

    const app = {
        init() {
            this.setupFretboard();
            this.setupinstrumentSelector();
            handlers.setupEventListeners();
            this.setupNoteNameSection();
        },
        setupFretboard() {
            fretboard.innerHTML = ''
            root.style.setProperty('--number-of-strings', numberOfStrings)
            for(let i = 0; i < numberOfStrings; i++) {
                let string = tools.createElement('div');
                string.classList.add('string');
                fretboard.appendChild(string);

                for(let j = 0; j <= numberOfFrets; j++) {
                    let noteName = this.generateNoteNames((j + instrumentTuningPresets[selectedInstrument][i]), accidentals);
                    let noteFret = tools.createElement('div');
                    noteFret.classList.add('note-fret')
                    string.appendChild(noteFret);

                    noteFret.setAttribute('data-note', noteName);

                    if(i === 0 && singleFretMarkPositions.indexOf(j) !== -1) {
                        noteFret.classList.add('single-fretmark')
                    }

                    if(i === 0 && doubleFretMarkPositions.indexOf(j) !== -1) {
                        let doubleFretMark = tools.createElement('div');
                        doubleFretMark.classList.add('double-fretmark')
                        noteFret.appendChild(doubleFretMark);
                    }
                }
            }
            allNotes = document.querySelectorAll(".note-fret");
        },
        generateNoteNames(noteIndex, accidentals) {
            noteIndex = noteIndex % 12;
            let noteName;
            if(accidentals === 'flats') {
                noteName = notesFlat[noteIndex];
            }
            else if (accidentals === 'sharps') {
                noteName = notesSharp[noteIndex];
            }
            return noteName;
        },
        setupinstrumentSelector() {
            for (instrument in instrumentTuningPresets) {
                let instrumentOption = tools.createElement('option', instrument);
                instrumentSelector.appendChild(instrumentOption);
            }
            
        },
        setupNoteNameSection() {
            noteNameSection.innerHTML = '';
            let noteNames;
            if(accidentals === 'flats') {
                noteNames = notesFlat;
            }
            else {
                noteNames = notesSharp;
            }
            noteNames.map(noteName => noteNameSection.appendChild(tools.createElement('span', noteName)));
        },
        toggleMultipleNotes(noteName, opacity) {
            for(let i = 0; i < allNotes.length; i++) {
                if(allNotes[i].dataset.note === noteName) {
                    allNotes[i].style.setProperty('--noteDotOpacity', opacity);
                }
            }
        }
    }

    const handlers = {
        showNoteDot(event) {
            if(event.target.classList.contains('note-fret') && !showAllNotes) {
                if(showMultipleNotes) {
                    app.toggleMultipleNotes(event.target.dataset.note, 1)
                }
                else {
                    event.target.style.setProperty('--noteDotOpacity', 1);
                }
            }
        },
        hideNoteDot(event) {
            if(event.target.classList.contains('note-fret') && !showAllNotes) {
                if(showMultipleNotes) {
                    app.toggleMultipleNotes(event.target.dataset.note, 0)
                }
                else {
                    event.target.style.setProperty('--noteDotOpacity', 0);
                }
            }
        },
        setSelectedInstrument(event) {
            selectedInstrument = event.target.value;
            numberOfStrings = instrumentTuningPresets[selectedInstrument].length;
            app.setupFretboard();
        },
        setAccidentals(event) {
            if(event.target.classList.contains('acc-select')) {
                accidentals = event.target.value;
                app.setupFretboard();
                app.setupNoteNameSection();
            }
        },
        setNumberOfFrets(event) {
            numberOfFrets = event.target.value;
            app.setupFretboard();
        },
        setShowAllNotes(event) {
            showAllNotes = showAllNotesSelector.checked;
            if(showAllNotes) {
                root.style.setProperty('--noteDotOpacity', 1);
                app.setupFretboard();
            }
            else {
                root.style.setProperty('--noteDotOpacity', 0);
                app.setupFretboard();
            }
        },
        setShowMultipleNotes() {
            showMultipleNotes = showMultipleNotesSelector.checked;
        },
        setNotesToShow(event) {
            app.toggleMultipleNotes(event.target.innerText, 1);
        },
        setNotesToHide(event) {
            if(!showAllNotes) {
                app.toggleMultipleNotes(event.target.innerText, 0);
            }
        },
        setupEventListeners() {
            fretboard.addEventListener('mouseover', this.showNoteDot);
            fretboard.addEventListener('mouseout', this.hideNoteDot);
            instrumentSelector.addEventListener('change', this.setSelectedInstrument);
            accidentalsSelector.addEventListener('click', this.setAccidentals)
            numberOfFretsSelector.addEventListener('change', this.setNumberOfFrets)
            showAllNotesSelector.addEventListener('change', this.setShowAllNotes),
            showMultipleNotesSelector.addEventListener('change', this.setShowMultipleNotes),
            noteNameSection.addEventListener('mouseover', this.setNotesToShow),
            noteNameSection.addEventListener('mouseout', this.setNotesToHide)
        }
    }

    const tools = {
        createElement(element, content) {
            element = document.createElement(element);
            if (arguments.length > 1) {
                element.innerHTML = content;
            }
            return element;
        }
    }

    app.init();
})();

