import React from 'react'
import AccidentalsSelector from '../AccidentalsSelector/AccidentalsSelector'
import InstrumentSelector from '../InstrumentSelector/InstrumentSelector'
import NumberOfFretsSetting from '../NumberOfFretsSetting/NumberOfFretsSetting'
import ShowAllNotesSetting from '../ShowAllNotesSetting/ShowAllNotesSetting'
import ShowMultipleNotesSetting from '../ShowMultipleNotesSetting/ShowMultipleNotesSetting'
import './GuitarSettings.css'

const GuitarSettings = ({setInstrument, setAccidentals} : {setInstrument: Function, setAccidentals:Function}) => {
  
  
  return (
    <div className='settings'>
      <InstrumentSelector setInstrument={setInstrument} />
      <AccidentalsSelector setAccidentals={setAccidentals}/>
      <NumberOfFretsSetting />
      <ShowAllNotesSetting />
      <ShowMultipleNotesSetting />
    </div>
  )
}

export default GuitarSettings