import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import './ChatList.css';
import chatPic from './chatPic.png';
import SearchBar from './SearchBar';

class ChatList extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        search: "",
        profilePics: undefined
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

    getProfilePics = () => {

        let imgs = [];

        if (this.props.chats != undefined) {
            this.props.chats.map(async chat => {
                let url = "http://localhost:3000/api/profilepic/" + chat.id._serialized;
                let response = await fetch(url);
                let data = await response.json();
    
                imgs.push({
                    id: chat.id._serialized,
                    ppic: data
                })
            })
    
            this.setState({
                profilePics: imgs
            });
        }
    }

    componentDidMount() {
    }

    render() {
        
        if (this.props.chats === undefined) {
            return (
                <div className="loading-chatList"></div>
            )
        } else {

            let filteredChats = this.props.chats.filter(chat => {
            return chat.name.indexOf(this.state.search) !== -1;
            });

            return (
                <div className="chat-list-wrapper">
                    <SearchBar searchChat={this.searchChat}/>
                    <ul className="chat-list">
                        {filteredChats.map(chat => {
                            let profileUrl = "http://localhost:3000/api/profilepic/" + chat.id._serialized;
                            
                            return (
                                <>
                                    <li className="chat-item" onClick={() => {
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