import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor(props) {
        super(props);
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
    
    render(){
        return (
            <div>
                <button className="resolution" onClick={this.handleClick}>{this.state.settings.video.resolution}</button>
                <button className="bitrate" onClick={this.handleBitRate}>{this.state.settings.bitrate}</button>
            </div>
        )
    }

    handleBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings, bitrate: 12
            }
        })
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {resolution: '720p'}
            }
        })
    }
}