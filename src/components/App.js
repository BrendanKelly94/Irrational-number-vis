import React, { Component } from 'react';
import {TweenMax, Linear} from 'gsap';
import NumberSelect from './middle/NumberSelect.js';
import ColorSelect from './left/ColorSelect.js';
import SpecialSvg from './middle/SpecialSvg.js';
import NumberInput from './right/NumberInput.js';
import DownloadSvg from './right/DownloadSvg.js';
import '.././App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      den: 1,
      number: "Pi",
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
      circleCount: 100
    }
    this.iNums = {
        Pi: 0.318309886183791,
        e : 0.27182818284590452353602874713527,
        Golden : 0.61803398874989484820,
        ln2 : 0.69314718056,
        itoi: 0.207879576,
        root2: 99/70
    }
    this.numbers = [
      {name: 'Pi', color: '#EA3546'},
      {name: 'e' , color: '#662E9B'},
      {name: 'Golden' , color: '#F9C80E'},
      {name: 'ln2' , color: '#F86624'},
      {name: 'itoi' , color: '#CBF3F0'},
      {name: 'root2' , color: '#43BCCD'}
    ];
    this.columnStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
    this.changeNumber = this.changeNumber.bind(this);
    this.animate = this.animate.bind(this);
    this.setColors = this.setColors.bind(this);
    this.setCircleCount = this.setCircleCount.bind(this);
    this.setGrain = this.setGrain.bind(this);
  }

  setCircleCount(count){
    this.setState({ circleCount : count});
  }
  animate(){
    TweenMax.to(`.${this.state.colors[0]}`, 4, {rotation:360, repeat:-1, transformOrigin:"250px 250px", ease:Linear.easeNone})
  }

  changeNumber(num){
    this.setState({number: num});
  }

  setGrain(num){
    this.setState({
      den: num
    })
  }

  setColors(colors){
    this.setState({colors: colors});
  }

  render() {
    return (
      <div style = {{display: 'flex', justifyContent: 'space-evenly', height: '100%'}}>
        <div style = {this.columnStyle}>
          <ColorSelect callback = {this.setColors}/>
        </div>
        <div style = {this.columnStyle}>
          <SpecialSvg circleCount = {this.state.circleCount} colors = {this.state.colors} angle = {this.iNums[this.state.number]  * (Math.PI * 2)} den = {this.state.den} />
          <NumberSelect currentNum = {this.state.number} numbers = {this.numbers} changeNum = {this.changeNumber}/>
        </div>
        <div style = {this.columnStyle}>
          <NumberInput init = {1} label = 'Grain' callback = {this.setGrain}/>
          <NumberInput init = {100} label = 'Circle Count' callback = {this.setCircleCount}/>
          <DownloadSvg />
        </div>
      </div>

    )
  }
}

export default App;
