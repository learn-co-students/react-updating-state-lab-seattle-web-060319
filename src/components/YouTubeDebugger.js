// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    updateBitRate = () => {
        return this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    updateRes = () => {
        return this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button className='bitrate' onClick={this.updateBitRate}>Change Bit Rate to 12</button>
                <button className='resolution' onClick={this.updateRes}>Change Resolution to 720p</button>
            </div>
        )
    }

}