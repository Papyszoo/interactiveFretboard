import React from 'react'
import AccidentalsSelector from '../AccidentalsSelector/AccidentalsSelector'
import InstrumentSelector from '../InstrumentSelector/InstrumentSelector'
import NumberOfFretsSetting from '../NumberOfFretsSetting/NumberOfFretsSetting'
import ShowAllNotesSetting from '../ShowAllNotesSetting/ShowAllNotesSetting'
import ShowMultipleNotesSetting from '../ShowMultipleNotesSetting/ShowMultipleNotesSetting'
import './GuitarSettings.css'

const GuitarSettings = () => {
  
  
  return (
    <div className='settings'>
      <InstrumentSelector />
      <AccidentalsSelector />
      <NumberOfFretsSetting />
      <ShowAllNotesSetting />
      <ShowMultipleNotesSetting />
    </div>
  )
}

export default GuitarSettings