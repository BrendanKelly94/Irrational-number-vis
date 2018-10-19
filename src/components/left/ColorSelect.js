import React, { Component } from 'react';
import ColorPicker from '../left/ColorPicker';
import XButton from '../common/XButton.js';
import OutlineButton from '../common/OutlineButton';

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
    const tempArr = this.state.colors.slice();
    tempArr[id] = color;
    this.setState({colors: tempArr});
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
                <ColorPicker id = {index} color = {item} changeColor = {this.changeColor} deleteColor = {_ => this.deleteColor(index)}/>
              </div>
            )
          })
        }
        <div style = {{marginTop: '1em', display: 'flex', justifyContent: 'center'}}>
          <XButton size = {30} item = {'plus'} color = {'#000'} hoverColor = {'#ddd'} callback= {this.addColor} transition ={false}/>
        </div>
        <div style = {{marginTop: '.5em', display: 'flex', justifyContent: 'flex-end'}}>
          <OutlineButton text = {'Apply'} callback = {_ => this.props.callback(this.state.colors)} fontSize = '.75' />
        </div>
      </div>
    );
  }
}

export default ColorSelect;
