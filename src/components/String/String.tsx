import React from 'react'
import NoteFret from '../NoteFret/NoteFret';
import './String.css';
import { instrumentTuningPresets, doubleFretMarkPositions, singleFretMarkPositions } from '../../config/Constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const String = ({ index }:
  { index: number }) => {
  const { numberOfFrets, selectedInstrumentTuning, notes } = useSelector((state: RootState) => state.guitar);

  type ObjectKey = keyof typeof instrumentTuningPresets;
  const generateNoteNames = (noteIndex: number) => {
    noteIndex = noteIndex % 12;
    return notes[noteIndex];
  }

  return (
    <div className='string'>
      {(() => {
        let td = [];
        for (let i = 0; i < numberOfFrets; i++) {
          let fretmarkClass = '';
          if (index === 0 && singleFretMarkPositions.indexOf(i) !== -1) {
            fretmarkClass = 'single-fretmark';
          }

          if (index === 0 && doubleFretMarkPositions.indexOf(i) !== -1) {
            fretmarkClass = 'double-fretmark';
          }

          let noteName = generateNoteNames((i + selectedInstrumentTuning[index]));
          td.push(<NoteFret noteName={noteName} fretmarkClass={fretmarkClass} key={i} />);
        }
        return td;
      })()}
    </div>
  )
}

export default String