import React, { useEffect, useState } from 'react';
import './App.css';
import BoxGrid from './components/Grid'

const App = () => {
  const [visible, toggleVisible] = useState(false)
  return (
    <>
      <h3>Box Time</h3>
      <BoxGrid />
    </>
  );
}

export default App;
