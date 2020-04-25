import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [visible, toggleVisible] = useState(false)
  const [color, updateColor] = useState("blue")

  useEffect(() => { console.log("Logo state was updated.") }, [visible])

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
      <header className="App-header">
        <div hidden={visible} onClick={changeStuff}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey Tommy! <code>:D</code>
          </p>
        </div>
        <h1 style={{ color: color }} >{visible ? "visible" : "hidden"}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={buttonClick}>Click me please</button>
      </header>
    </>
  );
}

export default App;
