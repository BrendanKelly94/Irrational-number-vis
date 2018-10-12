import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import XButton from './XButton.js';

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }

    this.color = '#fff';
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.color = e.hex;
    this.props.changeColor(e.hex, this.props.id);
  }


  handleClick(){
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div id = 'test' className = 'color-picker-container' >
        <ChromePicker className = {isOpen? 'color-picker visible': 'color-picker invisible'} key = {this.color + this.props.id} onChange = {this.handleChange} />
        <div style ={{display:'flex'}}>
          <div onClick = {this.handleClick} className = 'color-indicator' style = {{backgroundColor: `${this.color}`, height: '20px'}}></div>
          <XButton size = {20} item = {'x'} color = {'#fff'} hoverColor = {this.color} callback= {(isOpen)?this.handleClick:this.props.deleteColor} transition = {isOpen}/>
        </div>
      </div>
    );
  }
}


export default ColorPicker;
