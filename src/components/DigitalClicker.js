// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0
        }
    }
    
    render(){
        return(
            <button onClick={this.handleButtonClick}>{this.state.timesClicked}</button>
        )
    }

    handleButtonClick = () => {
        this.setState( prevState => ({timesClicked: prevState.timesClicked + 1}))
    }
}