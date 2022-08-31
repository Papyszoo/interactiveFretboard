import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setShowAllNotes } from '../../redux/guitar';
import { RootState } from '../../redux/store';

const ShowAllNotesSetting = () => {
  const dispatch = useDispatch();
  const {showAllNotes} = useSelector((state: RootState) => state.guitar);
  return (
    <>
      <label htmlFor="show-all-notes">Show all notes</label>
      <input type="checkbox" name="show-all-notes" id="show-all-notes" checked={showAllNotes} onChange={(event) => dispatch(setShowAllNotes(event.target.checked))} />
    </>
  )
}

export default ShowAllNotesSetting