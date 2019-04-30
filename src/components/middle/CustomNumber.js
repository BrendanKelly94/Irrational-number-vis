import React, { Component } from 'react';

class CustomNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      style: {
        backgroundColor: 'transparent',
        borderBottom: '2px solid transparent',
      },
      input: false,
      custom: 0.00
    }
    this.hoverState = {
      backgroundColor: '#ddd',
      borderBottom: `2px solid #000`
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

    this.inputStyle = {
      textAlign: 'center',
      width: 'inherit',
      border: 'none',
      backgroundColor: 'inherit',
      overflowX: 'scroll'
    }

    this.handleMouseEnter= this.handleMouseEnter.bind(this);
    this.handleMouseLeave= this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    this.props.setActive(this.state.custom);
  }

  handleInputChange(e){
    if(!Number.isNaN(parseFloat(e.target.value))){
      this.setState({custom: parseFloat(e.target.value)});
      this.props.setActive(parseFloat(e.target.value));

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.active !== 'custom' && this.props.active === 'custom'){
      this.setState({input: true})

    }
  }

  render() {
    const {active} = this.props;
    return (

      <div id = {'custom'}
        onMouseEnter = {this.handleMouseEnter}
        onMouseLeave = {this.handleMouseLeave}
        onClick = {this.handleClick}
        style = {(active === 'custom')? {...this.selectableStyle, ...this.hoverState}: {...this.selectableStyle, ...this.state.style}}
      >
        {this.state.input?
          <input style = {this.inputStyle} type = 'text' onChange = {this.handleInputChange}></input>
          :'custom'
        }

      </div>

    );
  }
}


export default CustomNumber;
