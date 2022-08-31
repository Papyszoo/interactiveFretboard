import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setShowMultipleNotes } from '../../redux/guitar';
import { RootState } from '../../redux/store';

const ShowMultipleNotesSetting = () => {
  const dispatch = useDispatch();
  const {showMultipleNotes} = useSelector((state: RootState) => state.guitar);
  return (
    <>
      <label htmlFor="show-multiple-notes">Show multiple notes</label>
      <input type="checkbox" name="show-multiple-notes" id="show-multiple-notes" checked={showMultipleNotes} onChange={(event) => dispatch(setShowMultipleNotes(event.target.checked))} />
    </>
  )
}

export default ShowMultipleNotesSetting