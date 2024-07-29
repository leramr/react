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
  submit =(e)=>{
    e.preventDefault()
    console.log (this.state.name)
  }
  render() {
    return (
      <div>
        <form>
          <p>{this.state.name}</p>
          <input onChange={this.changeInput}/>
          <button onClick={this.submit} type='submit'>sumbit</button>
        </form>
        
      </div>
    )
  }
}
