import React, { Component } from 'react';
import OutlineButton from './OutlineButton.js';

class DownloadSvg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
      <div id = 'download'>
        <div id = 'download-content' onBlur = {this.handleBlur} tabindex="-1" className = {(this.state.isOpen)?'visible': 'invisible'}>
          {this.string}
        </div>
        <OutlineButton fontSize = {'1'} text = {'Download'} callback = {this.handleClick} />
      </div>
    );
  }
}


export default DownloadSvg;
