import React, { Component } from 'react';
import './ChatList.css';
import chatPic from './chatPic.png';
import SearchBar from './SearchBar';

class ChatList extends Component {

    state = {
        search: "",
        /* chats: this.props.chats */
    }

    searchChat = (value) => {
        this.setState({
            search: value
        }, () => {console.log(this.state.search, this.state.chats)});
    }

    ack = () => {
        let url = undefined
    }

    formatTime = (timestamp) => {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();

        let formattedTime = hours + ":" + minutes.substr(-2);

        return formattedTime;
    }

    render() {
        /* let filteredChats = this.props.chats.filter(chat => {
            return chat.name.indexOf(this.state.search) !== -1;
        }); */
        if (this.props.chats === undefined) {
            return (
                <div className="loading-chatList"></div>
            )
        } else {
            return (
                <div className="chat-list-wrapper">
                    <SearchBar searchChat={this.searchChat}/>
                    <ul className="chat-list">
                        {this.props.chats.map(chat => {
                            let profilePicUrl = "http://localhost:3000/api/profilepic/" + chat.id._serialized;
                            return (
                                <>
                                    <li className="chat-item" onClick={() => {
                                            this.props.selectChat(chat.id._serialized);
                                            chat.unreadCount = 0;
                                        }}>
                                        <div className="profile-pic">
                                            <img src={chatPic} alt="img" loading="lazy" />
                                        </div>
                                        <div className="chat-info">
                                            <p className="chat-name">{chat.name}</p>
                                            <br/>
                                            <p className="chat-last-message">{this.formatTime(chat.timestamp)}</p>
                                        </div>
                                        <div className="chat-end">
                                            {chat.unreadCount ? <p className="unread">{chat.unreadCount}</p> : undefined}
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