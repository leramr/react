import React, {Component} from 'react'


export default  class Header extends Component {
    helloWorld = "hi hello World"
    render() {
      return (
        <div>
          <p>{this.helloWorld}</p>
          <p className='header'>{this.props.title}</p>
        </div>
      )
    }
  }