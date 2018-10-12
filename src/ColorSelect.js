import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import XButton from './XButton.js';
import OutlineButton from './OutlineButton';

class ColorSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colors: ['#ffffff']
    }
    this.colorBuf = ['#ffffff'];
    this.addColor = this.addColor.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.idSelect = this.idSelect.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
  }

  addColor(){
    this.colorBuf = [...this.colorBuf, '#ffffff']
    this.setState(prevState => ({
      colors: [...prevState.colors, '#ffffff']
    }));
  }

  deleteColor(id){
    const temp = this.state.colors.slice();
    temp.splice(id,1);
    this.setState({colors: temp});
  }

  changeColor(color, id){
    const tempArr = this.colorBuf;
    tempArr[id] = color;
    this.colorBuf = tempArr;
  }

  idSelect(id){
    this.currentId = id;
  }

  render() {

    return (
      <div style = {{display: 'flex',flexDirection: 'column'}}>
        <p style = {{fontSize: '1.25em',textAlign:'center'}}> Color Picker </p>
        {
          this.state.colors.map((item, index) => {
            return (
              <div style = {{display:'flex',marginTop: '1em'}}>
                <ColorPicker id = {index} changeColor = {this.changeColor} deleteColor = {_ => this.deleteColor(index)}/>
              </div>
            )
          })
        }
        <div style = {{marginTop: '1em', display: 'flex', justifyContent: 'center'}}>
          <XButton size = {30} item = {'plus'} color = {'#000'} hoverColor = {'#ddd'} callback= {this.addColor} transition ={false}/>
        </div>
        <div style = {{marginTop: '.5em', display: 'flex', justifyContent: 'flex-end'}}>
          <OutlineButton text = {'Apply'} callback = {_ => this.props.callback(this.colorBuf)} fontSize = '.75' />
        </div>
      </div>
    );
  }
}

export default ColorSelect;
