// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
  this.state = {
    timesClicked: 0
  }
}

  handleClick() {
    let newVal = this.state.timesClicked += 1
    this.setState({
      timesClicked: newVal
    })
  }

  render() {
    return(
     <button onClick={this.handleClick.bind(this)}>{this.state.timesClicked}</button>
    )
  }
}
