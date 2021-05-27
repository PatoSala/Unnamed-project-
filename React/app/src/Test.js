import React, {Component} from 'react';
import useState from "react";
import './Test.css';

class Test extends Component {
    
    state = {
        loading:true,
        chats: null
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
            <div>
                {this.state.loading ? <p>loading...</p> : 
                <ul>
                    {this.state.chats.map((chat) => {
                        return (
                            <li>{chat.name}</li>
                        )
                    })}
                </ul>}
            </div>
        )
    }
}

export default Test;