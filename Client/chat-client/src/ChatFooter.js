import React, { Component } from 'react';
import './ChatFooter.css';

class ChatFooter extends Component {
    render() {
        return (
            <footer className="chat-footer">
                <form action="" method="">
                    <input type="textarea" name="message" value="" placeholder="Type something..." />
                </form>
            </footer>
        )
    }
}

export default ChatFooter;