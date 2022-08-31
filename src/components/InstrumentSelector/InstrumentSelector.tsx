import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { instrumentTuningPresets } from '../../config/Constants'
import { setselectedInstrument } from '../../redux/guitar';
import {setCssVariable} from '../../utils/CssUtils';

const InstrumentSelector = () => {  
  type ObjectKey = keyof typeof instrumentTuningPresets;
  const dispatch = useDispatch();

  const handleInstrumentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selInstrument = event.target.value as ObjectKey;
    setCssVariable('--number-of-strings', instrumentTuningPresets[selInstrument].length);
    dispatch(setselectedInstrument(instrumentTuningPresets[selInstrument]));
  }

  return (
    <>
      <label htmlFor="instrument-selector">Selected instrument: </label>
      <select name="instrument-selector" id="instrument-selector" onChange={handleInstrumentChange}>
        {Object.keys(instrumentTuningPresets).map((instrument:string) : any => {
          return <option value={instrument} key={instrument}>{instrument}</option>
        })}
      </select>
    </>
  )
}

export default InstrumentSelector