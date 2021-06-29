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
                    <input type="textarea" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Type something..." />
                    <button type="submit" className="send-message"><i class="fas fa-paper-plane"></i></button>
                </form>
            </footer>
        )
    }
}

export default ChatFooter;