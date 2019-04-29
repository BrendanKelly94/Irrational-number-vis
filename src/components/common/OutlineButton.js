import React, { Component } from 'react';

class OutlineButton extends React.Component {
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
      borderColor: '#000',
      borderRadius: '6px',
      padding: `${5*this.props.fontSize}px ${7*this.props.fontSize}px ${5*this.props.fontSize}px ${7*this.props.fontSize}px`,
      color: '#000',
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
      <button onMouseEnter = {this.handleEnter} onMouseLeave = {this.handleLeave} onClick = {this.props.callback} style = {(this.state.hover)?{...this.buttonStyle, backgroundColor: 'rgba(0,0,0,.5)'}:this.buttonStyle}>
        {this.props.children}
      </button>
    );
  }
}


export default OutlineButton;
