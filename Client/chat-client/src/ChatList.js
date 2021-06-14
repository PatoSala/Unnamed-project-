import React, { Component } from 'react';
import './ChatList.css';
import SearchBar from './SearchBar';

class ChatList extends Component {

    render() {
        if (this.props.chats === undefined) {
            return(
                <h1>Hi!</h1>
            )
        } else {
            return(
                <div className="chat-list-wrapper">
                <SearchBar/>
                <ul className="chat-list">
                    {this.props.chats.map(chat => {
                        return (
                            <>
                            <li className="chat-item" onClick={() => this.props.selectChat(chat.id._serialized)}>
                                <div className="profile-pic">
                                    <img src={chat.profilePic} alt="img" />
                                </div>
                                <div className="chat-info">
                                    <p className="chat-name">{chat.name}</p>
                                    <br/>
                                    <p className="chat-last-message">Last message here...</p>
                                </div>
                            </li>
                            </>
                        )
                    })}
                </ul>
                </div>
            )
        }
    }
}

export default ChatList;