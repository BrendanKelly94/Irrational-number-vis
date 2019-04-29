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
    this.color = props.color;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.color = e.hex;

  }

  handleClick(){

    const hasOpen = this.state.isOpen;
    this.setState({isOpen: !this.state.isOpen}, _ => {
      if(hasOpen){
        this.props.changeColor(this.color, this.props.id);
      }
      return;
    })

  }

  render() {
    const {isOpen} = this.state;
    this.colorIndicatorStyle = {
      borderRadius: '2px',
      width:'225px',
      backgroundColor: `${this.props.color}`,
      height: '20px'
    }

    return (
      <div>
        <div style = {isOpen? {...this.colorPickerStyle, ...this.visibleStyle}: {...this.colorPickerStyle, ...this.invisibleStyle}} >
          <ChromePicker onChange = {this.handleChange} />
        </div>
        <div style ={{display:'flex'}}>

          <div onClick = {this.handleClick} style = {this.colorIndicatorStyle}></div>
          <XButton size = {20} item = {'x'} color = {'#000'} callback= {(isOpen)?this.handleClick:(_ => this.props.deleteColor(this.props.id))} transition = {isOpen}/>
        </div>
      </div>
    );
  }
}


export default ColorPicker;
