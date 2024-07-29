import React, { Component } from 'react'

export default class mainComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      email:""
    }
  }
  changeClick=(e)=>{
    console.log(`Name: ${e.target.name}, Value: ${e.target.value}`);
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  clickBtn=(e)=>{
    e.preventDefault()
    console.log(`Button clicked with name: ${e.target.name}`);
  }
  render() {
    return (
      <div>
        <form>
          <input 
          type='text'
          name="name"
          value={this.state.name}
          onChange={this.changeClick}></input>
          <input
          type='text'
          name="email"
          value={this.state.email}
          onChange={this.changeClick}></input>
          <p>{this.state.name}</p>
          <p>{this.state.email}</p>
          <button type='submit' onClick={this.clickBtn}>submit</button>
        </form>
      </div>
    )
  }
}
