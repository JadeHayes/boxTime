import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from './Box';

const StyledGrid = styled.div`
  border-style: 10px solid coral;  
  background-color: #e6d5c5;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  overflow: auto;
`;

const BoxGrid = () => {
  let baseColor = "#1d7999"
  return (
    <StyledGrid>
      {
        [...Array(80)].map((i: number) => {
          return (<Box key={i} />)
        })
      }
    </StyledGrid>
  );
}

export default BoxGrid;
