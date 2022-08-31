import React from 'react'
import String from '../String/String';
import './Fretboard.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store';


const Fretboard = () => {
  const {numberOfStrings} = useSelector((state: RootState) => state.guitar);
  
  return (
    <div className='fretboard'>
      {[...Array(numberOfStrings)].map((a, index) => {
        return <String index={index} key={index}/>
      })}
    </div>
  )
}

export default Fretboard