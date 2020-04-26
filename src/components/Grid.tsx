import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from './Box';

const StyledGrid = styled.div`
  border-style: 10px solid coral;  
  background-color: #e6d5c5;
  height: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoxGrid = () => {
  const [visible, toggleVisible] = useState(false)
  let baseColor = "#1d7999"
  // Send the color as props so all boxes can share that color.
  return (
    <StyledGrid>
      <div>I'm a grid, please style me as such.</div>
      {
        [...Array(10)].map(() => {
          return (<Box />)
        })
      }
    </StyledGrid>
  );
}

export default BoxGrid;
