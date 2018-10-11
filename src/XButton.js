import React, { Component } from 'react';
import Number from './Number.js';

class XButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.itemPos = {
      minus: {
        line1: {
          x1: `${props.size/10}`,
          x2: `${props.size-(props.size/10)}`,
          y1: `${props.size/2}`,
          y2: `${props.size/2}`
        },
        line2: {
          x1: `${props.size/10}`,
          x2: `${props.size-(props.size/10)}`,
          y1: `${props.size/2}`,
          y2: `${props.size/2}`
        }
      },
      plus: {
        line1: {
          x1: `${props.size/10}`,
          x2: `${props.size-(props.size/10)}`,
          y1: `${props.size/2}`,
          y2: `${props.size/2}`
        },
        line2: {
          x1: `${props.size/2}`,
          x2: `${props.size/2}`,
          y1: `${props.size/10}`,
          y2: `${props.size-(props.size/10)}`
        }
      },
      x: {
        line1: {
          x1: `${props.size/10}`,
          x2: `${props.size-(props.size/10)}`,
          y1: `${props.size/10}`,
          y2: `${props.size-(props.size/10)}`
        },
        line2: {
          x1: `${props.size-(props.size/10)}`,
          x2: `${props.size/10}`,
          y1: `${props.size/10}`,
          y2: `${props.size-(props.size/10)}`
        }
      }
    }
    this.lineStyle = {
      stroke:`${this.props.color}`,
      strokeWidth:`${this.props.size/10}`,
      strokeLinecap: 'round'
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
    const { size, item, color, hoverColor} = this.props;
    let effectiveHoverColor;

    if(hoverColor === '#000' && color === '#000'){
      effectiveHoverColor = '#fff';
    }else if(hoverColor === '#fff' && color === '#fff'){
      effectiveHoverColor = '#000'
    }else{
      effectiveHoverColor = hoverColor;
    }

    return (
      <button onClick = {this.props.callback} style = {{padding: '0', backgroundColor: 'transparent', border: 'none'}}>
        <svg onMouseEnter = {this.handleEnter} onMouseLeave = {this.handleLeave} width={size} height={size} style ={{marginLeft: '1em', marginRight: '1em' ,backgroundColor:'transparent', transformOrigin: '50% 50%',
    transform: 'scale(.8)'}}>
          <line x1={this.itemPos[item].line1.x1} y1={this.itemPos[item].line1.y1} x2={this.itemPos[item].line1.x2} y2={this.itemPos[item].line1.y2} style={(this.state.hover)?{...this.lineStyle, stroke:`${effectiveHoverColor}`}:this.lineStyle} />
          <line x1 = {this.itemPos[item].line2.x1} y1 = {this.itemPos[item].line2.y1} x2 = {this.itemPos[item].line2.x2} y2 = {this.itemPos[item].line2.y2} style = {(this.state.hover)?{...this.lineStyle, stroke:`${effectiveHoverColor}`}:this.lineStyle} />
        </svg>
      </button>
    );
  }
}


export default XButton;
