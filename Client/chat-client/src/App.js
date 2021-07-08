import React, { Component } from 'react';
import logo from './logo.svg';
import ChatList from './ChatList'
import Chat from './Chat';
import NavBar from './NavBar';
import './App.css';

import socketClient  from "socket.io-client";
import server from "./server";

var socket = socketClient (server());

socket.on('connection', () => {
  console.log(`I'm connected with the back-end`);
});

class App extends Component {
  state = {
      chats: undefined,
      selectedChat: undefined,
      update: 0
  }

  setUpdateToZero = () => {
    this.setState({
      update: 0
    });
  }

  getChats = async () => { 
      let url = server() + '/api/getchats';
      let response = await fetch(url);
      let data = await response.json();

      this.setState({
          chats: data
      });

      console.log(this.state.chats);
  }

  componentDidMount() {
    /* this.getChats(); */

    socket.on("newMessage", (data) => {
      console.log(data);
      this.getChats();

      if (data === this.state.selectedChat) {
        this.setState({
          update: 1
        });
      }
    });

  };

  selectChat = (id) => {
    this.setState({
      selectedChat: id
    });
    console.log(this.state.selectedChat);
  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ChatList className="ChatList" chats={this.state.chats} selectedChat={this.state.selectedChat} getChats={this.getChats} selectChat={this.selectChat} server={server} />
        <Chat className="Chat" selectedChat={this.state.selectedChat} update={this.state.update} setToZero={this.setUpdateToZero}/>
      </div>
    );
  }
}

export default App;
