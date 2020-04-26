import React, { Component } from 'react';


export class Child extends Component<{ name: string, color: string }, { counter: number }> {
  constructor(props: { name: string, color: string }) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  componentDidMount = () => {
    console.log('Child component mount.')
  }

  updateCounter = () => {
    let oldCounter = this.state.counter
    this.setState({ counter: oldCounter + 1 })
  }

  render() {
    console.log(this.state.counter);
    return (
      <div onClick={this.updateCounter}>
        <h1>My name is {this.props.name}.</h1>
        <h1 style={{ color: this.props.color }}>Here is my favorite color.</h1>
        <div />
        );
      }
    }
