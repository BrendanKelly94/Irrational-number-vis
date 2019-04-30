import React, { Component } from 'react';
import {TweenMax} from 'gsap';

class SpecialSvg extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      circles: []
    }
    this.buildCircles = this.buildCircles.bind(this);
  }

  componentDidMount(){
    const temp = this.buildCircles();
    this.setState({circles: temp});
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.angle !== prevProps.angle || this.props.circleCount !== prevProps.circleCount || this.props.colors !== prevProps.colors || this.props.den !== prevProps.den ){
      console.log('prop change')
      const temp = this.buildCircles();
      this.setState({circles: temp});
    }else{
      const svgCircles = document.getElementsByClassName('circle');
      for(let i = 0; i < svgCircles.length; i++){
        TweenMax.to(svgCircles[i], .5,{x: this.state.circles[i].tx, y: this.state.circles[i].ty })
      }
    }

  }

  buildCircles(){
    let temp = [];
    let nAngle = this.props.angle;
    let size = 1;
    let color = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
    let r = 10;
    for(let i = 0; i < this.props.circleCount; i++){
      if(i % this.props.den === 0){
      r+= size* 2;
      if(size < 20) size += .5;
      color = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
      }
      let tx = r* Math.cos(nAngle);
      let ty = r* Math.sin(nAngle);
      temp.push( {size: size, tx: tx, ty: ty, color: color});
      nAngle += this.props.angle;
    }
    return temp;
  }

  render() {

    return (
      <svg id = 's' style = {{backgroundColor:'#000'}} width = "500" height = "500" viewBox = "-500 -500 1100 1100">
        <circle cx="50" cy="50" r="1" stroke="black" strokeWidth="1" fill="red" />

        {
          this.state.circles.map(item =>
              <circle className = {`circle ${item.color}`} cx="50" cy="50" r={item.size} stroke="black" strokeWidth="1" fill= {item.color}/>
            )
        }
      </svg>
    );
  }
}


export default SpecialSvg;
