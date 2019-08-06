// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      };

    handleResolution = () => {
        this.setState({
            settings:{
                bitrate: this.getBitrate(),
                video: {
                    resolution: '720p'
                }
            }
        })
    }
    handleBitrate = () => {
        this.setState({
            settings:{
                bitrate: 12,
                video: {
                    resolution: this.getResolution()
                }
            }
        })
    }
    getResolution = () => {
        return this.state.settings.video.resolution
    }
    getBitrate = () => {
        return this.state.settings.bitrate
    }
    render(){
        return (<div>
            <button className = 'resolution' onClick = {this.handleResolution}>Resolution</button>
            <button className = 'bitrate' onClick = {this.handleBitrate}>Bit Rate</button>
        </div>)
    }
}