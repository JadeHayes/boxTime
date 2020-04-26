import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const StyledBox = styled.div`
  border-style: 10px solid coral;  
  background-color: #1d7999;
  width: 100px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  margin: 20px;
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
    <StyledBox>
      <div>I'm a box</div>
    </StyledBox>
  );
}

export default Box;
