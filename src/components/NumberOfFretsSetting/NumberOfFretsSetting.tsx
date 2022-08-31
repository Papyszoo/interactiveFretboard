import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNumberOfFrets } from '../../redux/guitar';
import { RootState } from '../../redux/store';

const NumberOfFretsSetting = () => {
  const dispatch = useDispatch();
  const {numberOfFrets} = useSelector((state: RootState) => state.guitar);

  return (
    <>
      <label htmlFor="number-of-frets">Number of frets: </label>
      <input type="number" name="number-of-frets" id="number-of-frets" min="5" max="28" value={numberOfFrets} onChange={(event) => dispatch(setNumberOfFrets(+event.target.value))} />
    </>

  )
}

export default NumberOfFretsSetting