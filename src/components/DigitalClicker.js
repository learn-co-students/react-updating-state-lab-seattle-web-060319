// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    };

    handleClick = () => {
        let current = this.getTimesClicked()
        this.setState({
            timesClicked: ++current
        })
    }
    getTimesClicked = () => {
        return this.state.timesClicked
    }
    render(){
        return <button onClick = {this.handleClick}>{this.getTimesClicked()}</button>
    }
}
