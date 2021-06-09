import React, {Component} from 'react';
import useState from "react";
import './ChatList.css';

const ChatList = ({selectedChat, loading, selectChat, chats}) => {
        /* console.log(selectedChat)
        console.log(chats) */
        console.log(chats)
       return(
        <div className="chatList">
            {loading ? <p>loading...</p> : 
            <>
            <ul>
                {chats.length ? chats.map((chat) => {
                    return (
                        <li className="chat-item" onClick={() => {selectChat(chat.id.user)}}>
                                <div className="profile-pic">
                                    <img src="" alt="img"/>
                                </div>
                                <p className="chat-name">{chat.name}</p>   
                        </li>
                    )
                }) : <>loading....</>}
            </ul>
            </>}
        </div>
       )
    }


export default ChatList;