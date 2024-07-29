import React, { Component } from 'react'


export default class MainComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }
  incrementor = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementor}>+</button>
      </div>
    )
  }
}

