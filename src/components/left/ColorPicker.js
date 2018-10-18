import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import XButton from '../common/XButton.js';

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
    this.colorPickerStyle = {
      transformOrigin: '100% 0%',
      transition: 'transform .2s ease, opacity .1s ease'
    }
    this.invisibleStyle = {
      zIndex: '-1',
      transform: 'scaleY(0)',
      opacity: '0',
      height: '0'
    }
    this.visibleStyle = {
      transform: 'scaleY(1)',
      opacity: '1'
    }
    this.colorIndicatorStyle = {
      borderRadius: '2px',
      width:'225px',
      backgroundColor: `${props.color}`,
      height: '20px'
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

    this.colorIndicatorStyle = {
      borderRadius: '2px',
      width:'225px',
      backgroundColor: `${this.color}`,
      height: '20px'
    }

    return (
      <div>
        <div style = {isOpen? {...this.colorPickerStyle, ...this.visibleStyle}: {...this.colorPickerStyle, ...this.invisibleStyle}} >
          <ChromePicker key = {this.color + this.props.id} onChange = {this.handleChange} />
        </div>
        <div style ={{display:'flex'}}>

          <div onClick = {this.handleClick} style = {this.colorIndicatorStyle}></div>
          <XButton size = {20} item = {'x'} color = {'#fff'} hoverColor = {this.color} callback= {(isOpen)?this.handleClick:this.props.deleteColor} transition = {isOpen}/>
        </div>
      </div>
    );
  }
}


export default ColorPicker;
