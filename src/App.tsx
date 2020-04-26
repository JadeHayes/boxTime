import React, { useEffect, useState } from 'react';
import './App.css';
import BoxGrid from './components/Grid'

const App = () => {
  const [visible, toggleVisible] = useState(false)
  const [color, updateColor] = useState("blue")

  const randomNum = () => Math.floor(Math.random() * 256)
  const buttonClick = () => { toggleVisible(!visible) }
  const changeStuff = () => {
    let r = randomNum()
    let g = randomNum()
    let b = randomNum()
    updateColor(`rgb(${r}, ${g}, ${b})`)
  }

  return (
    <>
      <h3>Box Time</h3>
      <BoxGrid />
    </>
  );
}

export default App;
