import React, { Component } from 'react';

class SpecialSvg extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.colors)
    let circles = [];
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
  circles.push( {size: size, tx: tx, ty: ty, color: color});
  nAngle += this.props.angle;
}
    return (
      <svg id = 's' style = {{backgroundColor:'#000'}} width = "500" height = "500" viewBox = "-500 -500 1100 1100">
        <circle cx="50" cy="50" r="1" stroke="black" strokeWidth="1" fill="red" />

        {
          circles.map(item =>
              <circle className = {item.color} cx="50" cy="50" r={item.size} stroke="black" strokeWidth="1" fill= {item.color} transform = {`translate(${item.tx} ${item.ty})`}/>
            )
        }
      </svg>
    );
  }
}


export default SpecialSvg;
