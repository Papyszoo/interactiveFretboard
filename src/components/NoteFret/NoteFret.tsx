import React, { MouseEvent, MutableRefObject, useRef, useEffect } from 'react'
import './NoteFret.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setShowNote } from '../../redux/guitar';

const NoteFret = ({ noteName, fretmarkClass }:
    { noteName: string, fretmarkClass: string | undefined }) => {
    const noteFretRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const { showAllNotes, showMultipleNotes, showNote } = useSelector((state: RootState) => state.guitar);

    useEffect(() => {
        if (showAllNotes || (showMultipleNotes && showNote === noteName)) {
            setNoteOpacity(1);
        }
        else {
            setNoteOpacity(0);
        }
    }, [showAllNotes, showMultipleNotes, showNote])



    const setNoteOpacity = (opacity: number) => {
        noteFretRef?.current?.style.setProperty('--noteDotOpacity', "" + opacity)
    }

    const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
        if (showAllNotes) return;
        if (showMultipleNotes) {
            dispatch(setShowNote(noteName));
        } else {
            setNoteOpacity(1);
        }
    }
    const handleMouseOut = (event: MouseEvent<HTMLDivElement>) => {
        if (showAllNotes) return;
        if (showMultipleNotes) {
            dispatch(setShowNote(null));
        } else {
            setNoteOpacity(0);
        }
    }
    return (
        <div className={`note-fret`} ref={noteFretRef} data-note={noteName} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {fretmarkClass && <span className={`${fretmarkClass}`}></span>}
        </div>
    )
}

export default NoteFret