import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`
  border-style: 10px solid coral;  
  width: 100px;
  height: 100px;
  text-align: center;
  margin: 20px;
  display: inline-block;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Box = () => {
  const [visible, toggleVisible] = useState(false)
  const [color, updateColor] = useState("#1d7999")

  useEffect(() => {
    console.log(color)
  }, [color])

  const randomNum = () => Math.floor(Math.random() * 256)
  const changeColor = () => {
    let r = randomNum()
    let g = randomNum()
    let b = randomNum()
    updateColor(`rgb(${r}, ${g}, ${b})`)
  }

  return (
    <StyledBox
      style={{ backgroundColor: color }}
      onClick={(e) => changeColor()}>
    </StyledBox>
  );
}

export default Box;
