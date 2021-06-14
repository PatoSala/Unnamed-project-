import React, { Component } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader.js';
import ChatFooter from './ChatFooter.js';

class Chat extends Component {
    state = {
        messages: null,
        chatInfo: null
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

    formatTime = (timestamp) => {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();

        let formattedTime = hours + ":" + minutes.substr(-2);

        return formattedTime;
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
                        //si es mensaje del usuario tanto en grupo como en chat privado
                        if (message.fromMe) {
                            // si manda con multimedia
                            if (message.hasMedia) {
                                return (
                                    <li className="fromMe">
                                        {message.body = "Media Message"}
                                        <br/>
                                        <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                    </li>
                                )
                            }
                            // si elimina mensaje
                            if (message.type == "revoked") {
                                return (
                                    <li className="fromMe">
                                        <i>{message.body = "Deleted"}</i>
                                        <br/>
                                        <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                    </li>
                                )
                            }
                            // si es mensaje de texto
                            return (
                                <li className="fromMe">
                                    {message.body}
                                    <br/>
                                    <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                </li>
                            )

                        } else {
                            // si el chat es un grupo...
                            if (this.state.chatInfo.isGroup) {
                                // si no es contacto
                                if (message.hasOwnProperty("contactName") === false) {
                                    return (
                                        <li className="fromElse">
                                        {message.from}
                                        <br/>
                                        {message.body}
                                        <br/>
                                        <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                    </li>
                                    )
                                }
                                //si es contacto y hasMedia
                                if (message.hasMedia) {
                                    return (
                                        <li className="fromElse">
                                            {message.contactName}
                                            <br/>
                                            {message.body = "Media Message"}
                                            <br/>
                                            <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                        </li>
                                    )
                                } 
                                // si no es contacto y hasMedia
                                if (message.hasMedia && message.hasOwnProperty("contactName") === false) {
                                    return (
                                        <li className="fromElse">
                                            {message.from}
                                            <br/>
                                            {message.body = "Media Message"}
                                            <br/>
                                            <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                        </li>
                                    )
                                }
                                //si es contacto y elimina mensaje
                                if (message.type === "revoked") {
                                    return (
                                        <li className="fromElse">
                                            {message.contactName}
                                            <br/>
                                            <i>{message.body = "Deleted"}</i>
                                            <br/>
                                            <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                        </li>
                                    )
                                }
                                // si no es contacto y elimina mensaje
                                if (message.type === "revoked" && message.hasOwnProperty("contactName") === false) {
                                    return (
                                        <li className="fromElse">
                                            {message.from}
                                            <br/>
                                            <i>{message.body = "Deleted"}</i>
                                            <br/>
                                            <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                        </li>
                                    )
                                }
                                //si es contacto
                                return (
                                    <li className="fromElse">
                                        {message.contactName}
                                        <br/>
                                        {message.body}
                                        <br/>
                                        <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                    </li>
                                )
                            }
                            //si es chat privado
                            // si hasMedia
                            if (message.hasMedia) {
                                return (
                                    <li className="fromElse">
                                        {message.body = "Media Message"}
                                        <br/>
                                        <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                    </li>
                                )
                            }
                            //si elimina mensaje
                            if (message.type == "revoked") {
                                return (
                                    <li className="fromElse">
                                        <i>{message.body = "Deleted"}</i>
                                        <br/>
                                        <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                    </li>
                                )
                            }
                            //si es mensaje de texto
                            return (
                                <li className="fromElse">
                                    {message.body}
                                    <br/>
                                    <p className="formatTime">{this.formatTime(message.timestamp)}</p>
                                </li>
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