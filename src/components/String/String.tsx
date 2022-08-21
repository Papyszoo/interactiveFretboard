import React from 'react'
import NoteFret from '../NoteFret/NoteFret';
import './String.css';
import { instrumentTuningPresets, notesFlat, notesSharp, doubleFretMarkPositions, singleFretMarkPositions } from '../../config/Constants';

const String = ({ numberOfFrets, selectedInstrument, accidentals, mouseOverNote, mouseOutNote, index }:
  { numberOfFrets: number, selectedInstrument: string, accidentals: string, mouseOverNote: Function, mouseOutNote: Function, index:number }) => {
  type ObjectKey = keyof typeof instrumentTuningPresets;
  const selInstrument = selectedInstrument as ObjectKey;
  const generateNoteNames = (noteIndex: number) => {
    noteIndex = noteIndex % 12;
    let noteName;
    if (accidentals === 'flats') {
      noteName = notesFlat[noteIndex];
    }
    else if (accidentals === 'sharps') {
      noteName = notesSharp[noteIndex];
    }
    return noteName;
  }

  return (
    <div className='string'>
      {(() => {
        let td = [];
        for (let i = 0; i < numberOfFrets; i++) {
          let fretClass = '';
          if(index === 0 && singleFretMarkPositions.indexOf(i) !== -1) {
            fretClass = 'single-fretmark';
          }

          if(index === 0 && doubleFretMarkPositions.indexOf(i) !== -1) {
            fretClass = 'double-fretmark';
          }

          let noteName = generateNoteNames((i + instrumentTuningPresets[selInstrument][i]));
          td.push(<NoteFret noteName={noteName} className={fretClass} mouseOverNote={mouseOverNote} mouseOutNote={mouseOutNote} />);
        }
        return td;
      })()}
    </div>
  )
}

export default String