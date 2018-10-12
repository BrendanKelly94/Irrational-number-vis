import React, { Component } from 'react';
import Number from './Number.js';

class NumberSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 'Pi'
    }
    this.setActive = this.setActive.bind(this);
  }

  setActive(num){
    this.setState({
      active: num
    })
    this.props.changeNum(num);
  }

  render() {
    return (
      <div style = {{display: 'flex',justifyContent: 'center'}}>
        {this.props.numbers.map(num => {
          return <Number key = {num.name} num = {num} setActive = {this.setActive} active = {this.state.active}/>
        })}
      </div>
    );
  }
}


export default NumberSelect;
