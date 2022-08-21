import React, { useState } from 'react'
import Fretboard from '../Fretboard/Fretboard'
import GuitarSettings from '../GuitarSettings/GuitarSettings'
import { instrumentTuningPresets } from '../../config/Constants'
import { setCssVariable } from '../../utils/CssUtils'

const Guitar = () => {
  const [selectedInstrument, setSelectedInstrument] = useState('Guitar');
  const [accidentals, setAccidentals] = useState('Guitar');
  type ObjectKey = keyof typeof instrumentTuningPresets;
  const selInstrument = selectedInstrument as ObjectKey;

  const setInstrument = (instrument: string) => {
    setSelectedInstrument(instrument);
    setCssVariable('--number-of-strings', instrumentTuningPresets[selInstrument].length);
  }

  return (
    <>
      <GuitarSettings setInstrument={setInstrument} setAccidentals={setAccidentals} />
      <Fretboard numberOfFrets={20} numberOfStrings={instrumentTuningPresets[selInstrument].length} selectedInstrument={selectedInstrument} accidentals={accidentals}/>
    </>
  )
}

export default Guitar