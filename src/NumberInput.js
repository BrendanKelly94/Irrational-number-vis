import React, { Component } from 'react';
import XButton from './XButton.js';
//rename to controls
class NumberInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: props.init
    }
    this.handleInput = this.handleInput.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  up(){
    this.props.callback(this.state.number + 1)
    this.setState({
      number: this.state.number + 1
    })
  }

  down(){
    this.props.callback(this.state.number - 1)
    this.setState({
      number: this.state.number - 1
    })
  }

  handleInput(e){
    if(e.target.value){
      this.props.callback(parseInt(e.target.value));
    }else{
      this.props.callback(0);
    }

    this.setState({
      number: (e.target.value)?parseInt(e.target.value): 0
    })
  }

  render() {
    return (
      <div style ={{display:'flex', flexDirection: 'column'}}>
        <p className = 'label'> {this.props.label} </p>
        <div style = {{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <XButton size = {20} item = {'minus'} color = {'#000'} hoverColor = {'#ddd'} callback= {this.down}/>
          <input onChange = {this.handleInput} value = {this.state.number}/>
          <XButton size = {20} item = {'plus'} color = {'#000'} hoverColor = {'#ddd'} callback= {this.up}/>
        </div>
      </div>
    );
  }
}


export default NumberInput;
