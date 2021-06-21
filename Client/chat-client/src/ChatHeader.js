import React, { Component } from 'react';
import './ChatHeader.css';
import chatPic from './chatPic.png';

class ChatHeader extends Component {
    render() {
        if (this.props.chatInfo !== undefined) {
            return (
                <header className="chat-header">
                    <div className="chat-profile-pic">
                        <img src={this.props.chatInfo.profilePic} alt="img" />
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