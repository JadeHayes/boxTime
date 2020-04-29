import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoadingOutlined, PropertySafetyFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const StyledBox = styled.div`
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


const StyledSpinner = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  display: inline;
  position: relative;

  .anticon svg {
    margin: 0 58px 60px 58px;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  `;

const antIcon = <StyledSpinner><LoadingOutlined style={{ fontSize: 24 }} spin /></StyledSpinner>;
const Box = () => {
  const [color, updateColor] = useState("#1d7999")
  // const [loading, updateLoading] = useState(false)

  useEffect(() => {
    console.log('I am noise.')
  })

  // // useEffect can be used like componentDidMount
  // useEffect(() => {
  //   console.log('ComponentDidMount: weeeeee')
  // }, [])

  // // Can also replace componentDidUnmount by storing the logic in a clean up function.
  // // This is going to happen really fast so we won't see this in action.
  // useEffect(() => {
  //   console.log('ComponentDidMount: weeeeee')
  // return() => {
  //   console.log('Unmounted, clean up function.')
  // }
  // }, [])

  // useEffect(() => {
  //   console.log('Color update is happening.')
  // }, [color])

  // useEffect(() => {
  //   console.log('Loading is happening.')
  // }, [loading])

  const randomNum = () => Math.floor(Math.random() * 256)
  const changeColor = () => {
    let r = randomNum()
    let g = randomNum()
    let b = randomNum()
    // updateLoading(!loading)
    setTimeout(() => updateColor(() => {
      // updateLoading(false)
      return (`rgb(${r}, ${g}, ${b})`)
    }), 1000);
  }

  return (
    <>
      {/* {
        loading ? antIcon : */}
      <StyledBox
        style={{ backgroundColor: color }}
        onClick={(e) => changeColor()}>
      </StyledBox>
      {/* } */}
    </>
  );
}

export default Box;
