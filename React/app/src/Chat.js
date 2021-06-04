import React, {useEffect, useState} from "react";
import './Chat.css';

const Chat = ({selectedChat}) => {
    const url = "http://localhost:3000/api/getmessages/" + /* selectedChat */ 5491132296692;

    const [state, setState] = useState({messages: undefined})
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setState({messages: data});
        console.log(state.messages);
    }
    useEffect(() => {
        getData()
    }, [])

        if (state.messages === undefined) {
            return (
                <p>Messages Here!</p>
            )
        } else {
            return (
                <div className="messages-wrapper">
                    <ul>
                        {state.messages.map(message => {
                            if (message.hasMedia) {
                                message.body = 'Media Message';
                            }
                            if (message.fromMe) {
                                return (
                                    <li className="fromMe">{message.body}</li>
                                )
                            }
                            return (
                                <li className="fromElse">{message.body}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }

export default Chat;