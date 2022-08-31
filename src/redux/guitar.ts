import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { notesPresets, instrumentTuningPresets } from '../config/Constants';

export interface GuitarState {
  numberOfFrets: number,
  numberOfStrings: number,
  notes: Array<string>,
  selectedInstrumentTuning: Array<number>,
  showAllNotes: boolean,
  showMultipleNotes: boolean,
  showNote: string | null
}

const initialState: GuitarState = {
  numberOfFrets: 20,
  numberOfStrings: 6,
  notes: notesPresets['sharps'],
  selectedInstrumentTuning: instrumentTuningPresets['Guitar'],
  showAllNotes: false,
  showMultipleNotes: false,
  showNote: null
}

export const guitarSlice = createSlice({
  name: 'guitar',
  initialState,
  reducers: {
    setNumberOfFrets: (state, action: PayloadAction<number>) => {
      state.numberOfFrets = action.payload
    },
    setAccidentals: (state, action: PayloadAction<Array<string>>) => {
      state.notes = action.payload
    },
    setselectedInstrument: (state, action: PayloadAction<Array<number>>) => {
      state.selectedInstrumentTuning = action.payload
      state.numberOfStrings = action.payload.length
    },
    setShowAllNotes: (state, action: PayloadAction<boolean>) => {
      state.showAllNotes = action.payload
    },
    setShowMultipleNotes: (state, action: PayloadAction<boolean>) => {
      state.showMultipleNotes = action.payload
    },
    setShowNote: (state, action: PayloadAction<string | null>) => {
      state.showNote = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  setNumberOfFrets, 
  setAccidentals, 
  setselectedInstrument,
  setShowAllNotes,
  setShowMultipleNotes,
  setShowNote
} = guitarSlice.actions

export default guitarSlice.reducer