import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import './ChatList.css';
import chatPic from './chatPic.png';
import SearchBar from './SearchBar';

import socketClient  from "socket.io-client";
import server from './server';

var socket = socketClient (server());

class ChatList extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        search: "",
        profilePics: undefined,
        chats: undefined
    }

    searchChat = (value) => {
        this.setState({
            search: value
        }, console.log(this.state.search));
    }

    ack = () => {
        let url = undefined
    }

    formatTime = (timestamp) => {

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ['Sund', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


        let today = new Date();

        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();

        let formattedTime;

        if (today.getDate() === date.getDate()) {
            if (date.getHours().toString().length === 1) {
                formattedTime = "0" + hours + ":" + minutes.substr(-2);   
            } else {
                formattedTime = date.getHours() + ":" + minutes.substr(-2);
            }
        } else if (today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() == date.getDate() + 1) {
            formattedTime = "Yesterday";
        } else {
            formattedTime = months[date.getMonth()]  + "/" + date.getDate() + "/" + date.getFullYear();
        }

        return formattedTime;
    }

    getChats = async () => { 
        let url = server() + '/api/getchats';
        let response = await fetch(url);
        let data = await response.json();
  
        this.setState({
            chats: data
        });
  
        console.log(this.state.chats);
    }

    componentDidMount() {
        this.getChats();
        console.log("Mount: ",this.state.chats);

        socket.on("newMessage", (data) => {
            console.log(data);
            this.getChats();
        });
    }

    componentDidUpdate() {
        console.log("Updated: ", this.state.chats);
    }

    render() {
        
        if (this.state.chats === undefined) {
            return (
                <div className="loading-chatList">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        } else {
            let filteredChats = this.state.chats.filter(chat => {
                return chat.name.indexOf(this.props.search) !== -1;
            });

            console.log("filteredChats: ", filteredChats)

            return (
                <div className="chat-list-wrapper">
                    <SearchBar searchChat={this.searchChat}/>
                    <ul className="chat-list">
                        {this.state.chats.map(chat => {
                            
                            
                            return (
                                <>
                                    <li key={chat.id} className="chat-item" onClick={() => {
                                            this.props.selectChat(chat.id._serialized);
                                            chat.unreadCount = 0;
                                        }}>
                                        <div className="profile-pic">
                                            <img loading="lazy" src="https://img.icons8.com/ios/50/ffffff/test-account.png" placeholderSrc={chatPic} alt="img"/>
                                        </div>
                                        <div className="chat-info">
                                            <p className="chat-name">{chat.name}</p>
                                            
                                            <p className="chat-last-message">{this.formatTime(chat.timestamp)}</p>
                                        </div>
                                        <div className="chat-end">
                                            {chat.unreadCount ? <p className="unread">{chat.unreadCount}</p> : undefined}
                                            <div className="chat-options">
                                                <div class="level first"></div>
                                                <div class="level"></div>
                                                <div class="level last"></div>
                                            </div>
                                        </div>
                                    </li>
                                </>
                            )   
                        })}
                        <div className="footer-img">
                            <p>Greetings! Stranger.. :D</p>
                        </div>
                    </ul>
                    
                </div>
            )
        } 
    }
}

export default ChatList;