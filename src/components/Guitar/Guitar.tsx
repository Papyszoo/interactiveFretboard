import React, { useState } from 'react'
import Fretboard from '../Fretboard/Fretboard'
import GuitarSettings from '../GuitarSettings/GuitarSettings'

const Guitar = () => {
  return (
    <>
      <GuitarSettings />
      <Fretboard/>
    </>
  )
}

export default Guitar