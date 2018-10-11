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
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e){
    this.color = e.hex;
    this.props.changeColor(e.hex, this.props.id);
  }

  handleBlur(){
    this.setState({isOpen: false});
  }

  handleClick(){
    this.setState({isOpen: true})
  }

  render() {
    return (
      <div className = 'color-picker-container' tabindex="-1" >
        <ChromePicker className = {this.state.isOpen? 'color-picker visible': 'color-picker invisible'} key = {this.color + this.props.id} onChange = {this.handleChange} />
        <div style ={{display:'flex'}}>
          <div onBlur = {this.handleBlur} onClick = {this.handleClick} className = 'color-indicator' style = {{backgroundColor: `${this.color}`, height: '20px'}}></div>
          <XButton size = {20} item = {'x'} color = {'#fff'} hoverColor = {this.color} callback= {this.props.deleteColor}/>
        </div>
      </div>
    );
  }
}


export default ColorPicker;
