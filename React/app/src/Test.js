import React, {Component} from 'react';
import useState from "react";

/* class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: 'hi'};
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
            <ul>
                {this.state.apiResponse.map(chat => <li>{chat.name}</li>)}
            </ul>
        )
    }
} */

function Test() {
    const [response, setResponse ] = useState([]);

    fetch("http://localhost:3000/api/getchats")
            .then(res => res.text())
            .then(res => setResponse(res));

    return (
        <ul>
            {apiResponse.map((chat) => {
                return (
                    <li>{chat.name}</li>
                )
            })}
        </ul>
    )
} 

export default Test;