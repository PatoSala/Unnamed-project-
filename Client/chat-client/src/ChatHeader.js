import React, { Component } from 'react';
import './ChatHeader.css';
import chatPic from './chatPic.png';

class ChatHeader extends Component {
    render() {
        if (this.props.chatInfo !== undefined) {
            return (
                <header className="chat-header">
                    <button className="back-button" onClick={this.props.back}>
                        <img src="https://img.icons8.com/ios-filled/16/1851B4/back.png"/>
                        Back
                    </button>
                    <div className="chat-profile-pic">
                        <img src={this.props.chatInfo.profilePic ? this.props.chatInfo.profilePic : "https://img.icons8.com/ios/50/ffffff/test-account.png"} alt="img" />
                    </div>
                    <p className="chat-info-name">{this.props.chatInfo.name}</p>
                </header>
            )
        } else {
            return (
                <p>Header</p>
            )
        }
    }
}

export default ChatHeader;