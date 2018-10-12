import React, { Component } from 'react';
import Number from './Number.js';
import anime from 'animejs';

class XButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.hasOpen = false;
    this.transitionCounter = 0;
    this.line1 = React.createRef();
    this.line2 = React.createRef();
    this.itemColor = {
      plus: '#ddd',
      minus: '#ddd',
      x: '#FF474B'
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
    this.svgStyle = {
      marginLeft: '1em',
      marginRight: '1em',
      backgroundColor:'transparent',
      transformOrigin: '50% 50%',
      transform: 'translate(0,0)scale(.8)',
      transition: 'transform .5s ease'
    }
    this.hoverStyle = {}
    this.line1Forward = null;
    this.line2Forward = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount(){
    this.line1Forward = anime({
      targets: this.line1.current,
      x1:.35 * this.props.size,
      y1:.40 * this.props.size,
      x2: .60 * this.props.size,
      y2: .60 * this.props.size,
      scale: (1),
      easing: 'linear',
      duration: 500,
      autoplay: false,
      offset: 0
    });
    this.line2Forward = anime({
      targets: this.line2.current,
      x1:.95 * this.props.size,
      y1:.05 * this.props.size,
      x2:.60 * this.props.size,
      y2:.60 * this.props.size,
      scale: (1),
      easing: 'linear',
      duration: 500,
      autoplay:false,
      offset:0
    });
  }

  componentDidUpdate(prevProps, prevState){

    if(prevProps.transition !== this.props.transition){
      this.transitionCounter++;
      this.animate();
    }
  }

  animate(){
    if(this.transitionCounter === 1){
      this.line1Forward.play();
      this.line2Forward.play();
    }else{
      this.line1Forward.play();
      this.line2Forward.play();
      this.line1Forward.reverse();
      this.line2Forward.reverse();
    }
  }

  handleClick(){
    this.animate();
    this.props.callback();
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



    this.hoverStyle = transition?
      {stroke: '#25FF00',strokeWidth:`${this.props.size/10}`,
      strokeLinecap: 'round'}
      :
      {...this.lineStyle, stroke:this.itemColor[item]}

    return (
      <button onClick = {this.props.callback} style = {{padding: '0', backgroundColor: 'transparent', border: 'none'}}>
        <svg onMouseEnter = {this.handleEnter} onMouseLeave = {this.handleLeave} width={size} height={size} style ={transition?{...this.svgStyle, transform:'translate(0,-241.75px)'}: this.svgStyle}>
          <line ref = {this.line1} x1={this.itemPos[item].line1.x1} y1={this.itemPos[item].line1.y1} x2={this.itemPos[item].line1.x2} y2={this.itemPos[item].line1.y2} style={(this.state.hover)?this.hoverStyle:this.lineStyle} />
          <line ref = {this.line2} x1 = {this.itemPos[item].line2.x1} y1 = {this.itemPos[item].line2.y1} x2 = {this.itemPos[item].line2.x2} y2 = {this.itemPos[item].line2.y2} style = {(this.state.hover)?this.hoverStyle:this.lineStyle} />
        </svg>
      </button>
    );
  }
}


export default XButton;
