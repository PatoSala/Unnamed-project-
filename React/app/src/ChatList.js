import React, {Component} from 'react';
import useState from "react";
import './ChatList.css';

class ChatList extends Component {
    
    state = {
        loading:true,
        chats: null,
        selectedChat: null
    }

    async componentDidMount() {
        const url = "http://localhost:3000/api/getchats";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({chats: data, loading: false});
        console.log(data);
    }

    render() {
        return (
            <div className="chatList">
                {this.state.loading ? <p>loading...</p> : 
                <ul>
                    {this.state.chats.map((chat) => {
                        return (
                            <li>
                                
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