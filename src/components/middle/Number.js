import React, { Component } from 'react';

class Number extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      style: {
        backgroundColor: 'transparent',
        borderBottom: '2px solid transparent',
        transition: 'all .5s ease'
      }
    }
    this.hoverState = {
      backgroundColor: '#ddd',
      borderBottom: `2px solid ${this.props.num.color}`
    }
    this.nonHoverState = {
      backgroundColor: 'transparent',
      borderBottom: '2px solid transparent',
    }
    this.selectableStyle = {
      width: '4em',
      height: '2em',
      backgroundColor: 'darkgrey',
      borderBottom: '2px solid transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    this.handleMouseEnter= this.handleMouseEnter.bind(this);
    this.handleMouseLeave= this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter(){
    this.setState({
      style: this.hoverState
    })
  }
  handleMouseLeave(){
    this.setState({
      style: this.nonHoverState
    })
  }
  handleClick(){
    this.props.setActive(this.props.num.name);

  }

  render() {
    const {num, active} = this.props;
    return (

      <div id = {num.name}
        onMouseEnter = {this.handleMouseEnter}
        onMouseLeave = {this.handleMouseLeave}
        onClick = {this.handleClick}
        style = {(active === num.name)? {...this.selectableStyle, ...this.hoverState}: {...this.selectableStyle, ...this.state.style}}
      >
        {num.name}
      </div>

    );
  }
}


export default Number;
