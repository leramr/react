import React, { Component } from 'react'
import Header from './components/Header'
import logo from './img/sea.avif'


export default class App extends Component {
  onClick =()=>{console.log('onClick')}
  onMouseOver =()=> {console.log('onMouseOver')}

  render (){
    return <div>
      <Header title="title header"/>
      <input onClick={this.onClick} onMouseOver={this.onMouseOver}/> <br/>
      <img src={logo}/>
    </div>
  }

}
