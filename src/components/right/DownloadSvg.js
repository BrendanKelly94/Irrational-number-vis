import React, { Component } from 'react';
import OutlineButton from '../common/OutlineButton.js';

class DownloadSvg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.downloadContentStyle = {
      padding:'2%',
      borderRadius: '5px',
      width: '80%',
      height: '70%',
      backgroundColor: '#fff',
      overflowY: 'scroll',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
    this.string = '';
  }

  handleClick(){
    this.string = document.getElementById('s').outerHTML.toString();
    document.getElementById('download-content').focus();
    this.setState({
      isOpen: true
    })
  }

  handleBlur(){
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div>
        <div id = 'download-content' style = {this.downloadContentStyle} onBlur = {this.handleBlur} tabIndex="-1" className = {(this.state.isOpen)?'visible': 'invisible'}>
          {this.string}
        </div>
        <div style = {{position:'absolute',top: '2%', right: '2%'}}>
          <OutlineButton fontSize = {'1'} text = {'Download'} callback = {this.handleClick} />
        </div>
      </div>
    );
  }
}


export default DownloadSvg;
