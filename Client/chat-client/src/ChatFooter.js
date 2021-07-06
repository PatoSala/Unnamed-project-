import React, { Component } from 'react';
import './ChatFooter.css';

import server from './server';

class ChatFooter extends Component {

    state = {
        message: "",
        phone: undefined
    }
    

    handleChange = (e) => {
        this.setState({
            message: e.target.value,
            phone: this.props.chatInfo.id._serialized
        });
    }

    onSubmit = (e) => {

        fetch(server() + "/api/sendmessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            console.log(this.state.phone);
        })

        this.props.updateChat();

        this.setState({message: ""});

        e.preventDefault();
    }

    render() {
        return (
            <footer className="chat-footer">
                <form onSubmit={this.onSubmit}>
                    <input type="input" className="messageField" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Type something..."></input>
                    <button type="submit" className="send-message"><img src="https://img.icons8.com/fluent-systems-regular/32/ffffff/send-letter.png"/></button>
                </form>
            </footer>
        )
    }
}

export default ChatFooter;