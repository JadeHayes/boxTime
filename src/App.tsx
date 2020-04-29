import React, { useEffect, useState, Dispatch } from 'react';
import './App.css';
import BoxGrid from './components/Grid';
import styled from 'styled-components';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return ({
    incCount: () => { dispatch({ type: 'INC', data: 1 }) },
  });
}


const StyledButton = styled.button`
  background-color: rgb(0, 140, 186);
  float: right;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
`;

const Styledh2 = styled.h2`
  text-align: center;
`;

export const App = () => {
  const [reset, shouldReset] = useState(false)
  useEffect(() => {
    if (reset === true) {
      window.location.reload(false);
      shouldReset(false)
    }
  }, [reset])

  const resetBoxes = () => {
    shouldReset(true)
  }

  return (
    <>
      <StyledButton onClick={resetBoxes}>Clear</StyledButton>
      <Styledh2>Box Time</Styledh2>
      <BoxGrid />
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);