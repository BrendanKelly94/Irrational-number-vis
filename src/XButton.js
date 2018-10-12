import React, { Component } from 'react';
import Number from './Number.js';

class XButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.line1 = React.createRef();
    this.line2 = React.createRef();
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
    this.svgStyle = {
      marginLeft: '1em',
      marginRight: '1em',
      backgroundColor:'transparent',
      transformOrigin: '50% 50%',
      transform: 'translate(0,0)scale(.8)',
      transition: 'transform .5s ease'
    }
    this.line1Forward = null;
    this.line2Forward = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount(){
    // this.line1Forward = anime({
    //   targets: this.line1.current,
    //   x1:35,
    //   y1:40,
    //   x2: 60,
    //   y2: 60,
    //   easing: 'linear',
    //   duration: 200,
    //   autoplay: false,
    //   offset: 0
    // });
    // this.line2Forward = anime({
    //   targets: this.line2.current,
    //   x1:95,
    //   y1:5,
    //   x2:60,
    //   y2:60,
    //   easing: 'linear',
    //   duration: 200,
    //   autoplay:false,
    //   offset:0
    // });
  }

  animate(){
    // this.line1Forward.play();
    // this.line2Forward.play();
    // this.line1Forward.reverse();
    // this.line2Forward.reverse();
  }

  handleClick(){
    // this.animate();
    // this.props.callback();
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
    const { size, item, color, hoverColor, transition} = this.props;

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
        <svg onMouseEnter = {this.handleEnter} onMouseLeave = {this.handleLeave} width={size} height={size} style ={this.props.transition?{...this.svgStyle, transform:'translate(0,-241.75px)'}: this.svgStyle}>
          <line ref = {this.line1} x1={this.itemPos[item].line1.x1} y1={this.itemPos[item].line1.y1} x2={this.itemPos[item].line1.x2} y2={this.itemPos[item].line1.y2} style={(this.state.hover)?{...this.lineStyle, stroke:`${effectiveHoverColor}`}:this.lineStyle} />
          <line ref = {this.line2} x1 = {this.itemPos[item].line2.x1} y1 = {this.itemPos[item].line2.y1} x2 = {this.itemPos[item].line2.x2} y2 = {this.itemPos[item].line2.y2} style = {(this.state.hover)?{...this.lineStyle, stroke:`${effectiveHoverColor}`}:this.lineStyle} />
        </svg>
      </button>
    );
  }
}


export default XButton;
