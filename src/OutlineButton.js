import React, { Component } from 'react';
import Number from './Number.js';

class XButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.buttonStyle = {
      fontSize: `${this.props.fontSize}em`,
      backgroundColor: 'transparent',
      borderWidth: `${2*this.props.fontSize}px`,
      borderStyle: 'solid',
      borderColor: '#fff',
      borderRadius: '6px',
      padding: `${5*this.props.fontSize}px ${7*this.props.fontSize}px ${5*this.props.fontSize}px ${7*this.props.fontSize}px`,
      color: '#fff',
    }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter(){
    this.setState({
      hover: true
    })
  }

  handleLeave(){
    this.setState({
      hover:false
    })
  }

  render() {
    return (
      <button onMouseEnter = {this.handleEnter} onMouseLeave = {this.handleLeave} onClick = {this.props.callback} style = {(this.state.hover)?{...this.buttonStyle, color:'#000', borderColor: '#000'}:this.buttonStyle}>
        {this.props.text}
      </button>
    );
  }
}


export default XButton;
