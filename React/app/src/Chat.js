import React, {Component} from "react";

class Chat extends Component {

    state = {
        messages: undefined
    }

    async componentDidMount() {
        const url = "http://localhost:3000/api/getmessages/" + this.props.selectedChat;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({messages: data});
        console.log(this.state.messages);
    }

    render() {
        if (this.state.messages == undefined) {
            return (
                <p>Messages Here!</p>
            )
        } else {
            return (
                <div className="messages-wrapper">
                    <ul>
                        {this.state.messages.map(message => {
                            return (
                                <li>{message.body}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
}

export default Chat;