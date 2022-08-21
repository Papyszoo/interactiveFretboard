import React, { ChangeEvent } from 'react'
import { instrumentTuningPresets } from '../../config/Constants'
import {setCssVariable} from '../../utils/CssUtils';

const InstrumentSelector = ({setInstrument} : {setInstrument : Function}) => {
  const handleInstrumentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setInstrument(event.target.value);
  }
  
  return (
    <>
      <label htmlFor="instrument-selector">Selected instrument: </label>
      <select name="instrument-selector" id="instrument-selector" onChange={handleInstrumentChange}>
        {Object.keys(instrumentTuningPresets).map((instrument:string) : any => {
          return <option value={instrument}>{instrument}</option>
        })}
      </select>
    </>
  )
}

export default InstrumentSelector