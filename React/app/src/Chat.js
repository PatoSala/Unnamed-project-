import React, {useEffect, useState} from "react";
const Chat = ({selectedChat}) => {
    const url = "http://localhost:3000/api/getmessages/" + selectedChat;

    const [state, setState] = useState({messages: undefined})
    const getData = async () => {
        const response = await fetch(url);
        const data = await JSON.stringify(response);
        setState({messages: data});
        console.log(state.messages);
    }
    useEffect(() => {
        getData()
    }, [])

        if (state.messages == undefined) {
            return (
                <p>Messages Here!</p>
            )
        } else {
            return (
                <div className="messages-wrapper">
                    <ul>
                        {state.messages.map(message => {
                            return (
                                <li>{message.body}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }

export default Chat;