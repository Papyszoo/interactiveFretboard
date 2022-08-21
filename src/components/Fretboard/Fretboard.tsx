import React from 'react'
import String from '../String/String';
import './Fretboard.css'


const Fretboard = ({numberOfFrets, numberOfStrings, selectedInstrument, accidentals} : {numberOfFrets:number, numberOfStrings:number, selectedInstrument:string, accidentals:string}) => {
  const mouseOverNote = (element:HTMLDivElement, note:string) => {

  }

  const mouseOutNote = (element:HTMLDivElement, note:string) => {
    
  }
  
  return (
    <div className='fretboard'>
      {[...Array(numberOfStrings)].map((a, index) => {
        return <String numberOfFrets={numberOfFrets} selectedInstrument={selectedInstrument} accidentals={accidentals} mouseOverNote={mouseOverNote} mouseOutNote={mouseOutNote} index={index}/>
      })}
    </div>
  )
}

export default Fretboard