import React, {Component} from 'react';
import useState from "react";
import './ChatList.css';

const ChatList = ({selectedChat, loading, selectChat, chats}) => {
        /* console.log(selectedChat)
        console.log(chats) */
       return(
        <div className="chatList">
            {loading ? <p>loading...</p> : 
            <ul>
                {chats.map((chat) => {
                    return (
                        <li className="chat-item" onClick={() => {selectChat(chat.id.user)}}>
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


export default ChatList;