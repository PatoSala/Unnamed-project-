import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:3000/api/getchats")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return ( 
            <div className = "chat">
                <p className = "chat-name">{this.state.apiResponse}</p>
            </div>
        )
    }

}

export default Chat;