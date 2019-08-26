import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  //TODO: recommended way of updating state if the new state is derived from existing state
  updateCount = () => {
    this.setState(state => {
      return {count: state.count + 1}
    })
      
  }

  render() {
    console.log('console log from CounterButton.js')
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }  
}

export default CounterButton;
