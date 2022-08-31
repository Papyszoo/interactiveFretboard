import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { setAccidentals } from '../../redux/guitar';
import { notesPresets } from '../../config/Constants';
import './AccidentalsSelector.css'

const AccidentalsSelector = () => {
  type ObjectKey = keyof typeof notesPresets;
  const dispatch = useDispatch();

  const handleAccidentalsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selAccidentals = event.target.value as ObjectKey;
    dispatch(setAccidentals(notesPresets[selAccidentals]));
  }

  return (
    <div className="accidental-selector" onChange={handleAccidentalsChange}>
      <input type="radio" className="acc-select" id="flats" name="accidentals" value="flats" />
      <label htmlFor="flats">♭</label>
      <input type="radio" className="acc-select" id="sharps" name="accidentals" value="sharps" defaultChecked />
      <label htmlFor="sharps">♯</label>
    </div>
  )
}

export default AccidentalsSelector