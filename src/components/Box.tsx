import React, { useEffect, useState } from 'react';
import Grid from 'flexbox-react'
import styled from 'styled-components';


const StyledGrid = styled.div`
  border-style: 10px solid coral;  
  background-color: #e6d5c5;
  height: 100%;
`;

const Box = () => {
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
    <StyledGrid>
      <div>I'm a box, please style me as such.</div>
    </StyledGrid>
  );
}

export default Box;
