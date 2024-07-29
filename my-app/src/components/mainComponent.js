import React, { Component } from 'react'

export default class mainComponent extends Component {
  constructor (props){
    super(props)
    this.state = {
      name : ""
    }
  }
  changeInput = (e)=> {
    this.setState ({name: e.target.value})
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <input onChange={this.changeInput}/>
      </div>
    )
  }
}
