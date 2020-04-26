import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from './Box';


const StyledGrid = styled.div`
  border-style: 10px solid coral;  
  background-color: #e6d5c5;
  height: 100%;
`;

const BoxGrid = () => {
  const [visible, toggleVisible] = useState(false)
  const [color, updateColor] = useState("blue")

  return (
    <StyledGrid>
      <div>I'm a grid, please style me as such.</div>
      <Box />
    </StyledGrid>
  );
}

export default BoxGrid;
