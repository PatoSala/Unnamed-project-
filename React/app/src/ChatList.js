import React, {Component} from 'react';
import useState from "react";
import './ChatList.css';

class ChatList extends Component {

    render() {
        return (
            <div className="chatList">
                {this.props.loading ? <p>loading...</p> : 
                <ul>
                    {this.props.chats.map((chat) => {
                        return (
                            <li className="chat-item" onClick={() => {this.props.selectChat(chat.id.user)}}>
                                
                                    <div className="profile-pic">
                                        <img src="" alt="img"/>
                                    </div>
                                    {chat.name}
                                
                            </li>
                        )
                    })}
                </ul>}
            </div>
        )
    }
}

export default ChatList;