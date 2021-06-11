import React, { Component } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader.js';
import ChatFooter from './ChatFooter.js';

class Chat extends Component {
    state = {
        messages: null
    }

    getMessages = async () => {
        let url = 'http://localhost:3000/api/getmessages/' + this.props.selectedChat;
        let response = await fetch(url);
        let data = await response.json();

        let url2 = 'http://localhost:3000/api/getchat/' + this.props.selectedChat;
        let response2 = await fetch(url2);
        let data2 = await response2.json();

        this.setState({
            messages: data,
            chatInfo: data2
        })

        console.log(this.state.messages)
    }

    componentDidMount() {
        this.getMessages();
    }

    componentDidUpdate (prevProps) {
        if(prevProps.selectedChat !== this.props.selectedChat) {
          this.getMessages();
        }
      }

    render() {
        if (this.state.messages === null) {
            return (
                <p>Here goes a message!</p>
            )
        } else {
            return (
                <div className="chat-wrapper">
                    <ChatHeader chatInfo={this.state.chatInfo}/>
                <ul className="chat-box">
                    {this.state.messages.map((message) =>{
                        if (message.fromMe) {
                            return (
                                <li className="fromMe">{message.body}</li>
                            )
                        } else {
                            return (
                                <li className="fromElse">{message.body}</li>
                            )
                        }
                    })}
                </ul>
                    <ChatFooter chatInfo={this.state.chatInfo}/>
                </div>
            )
        }
    }
}

export default Chat;