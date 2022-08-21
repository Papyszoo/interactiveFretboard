import React, { ChangeEvent } from 'react'
import './AccidentalsSelector.css'

const AccidentalsSelector = ({setAccidentals}: {setAccidentals:Function}) => {
  const handleAccidentalsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAccidentals(event.target.value);
  }
  return (
    <div className="accidental-selector" onChange={handleAccidentalsChange}>
      <input type="radio" className="acc-select" id="flats" name="accidentals" value="flats" />
      <label htmlFor="flats">♭</label>
      <input type="radio" className="acc-select" id="sharps" name="accidentals" value="sharps" checked />
      <label htmlFor="sharps">♯</label>
    </div>
  )
}

export default AccidentalsSelector