import React, { MouseEvent } from 'react'
import './NoteFret.css';

const NoteFret = ({ noteName, className, mouseOverNote, mouseOutNote}:
    { noteName: string | undefined, className: string | undefined, mouseOverNote: Function, mouseOutNote: Function }) => {
    const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
        mouseOverNote(event.target, noteName);
    }
    const handleMouseOut = (event: MouseEvent<HTMLDivElement>) => {
        mouseOutNote(event.target, noteName);
    }
    return (
        <div className={`note-fret ${className}`} data-note={noteName} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></div>
    )
}

export default NoteFret