import React, { Component } from 'react';
import logo from './logo.svg';
import ChatList from './ChatList'
import Chat from './Chat';
import NavBar from './NavBar';
import './App.css';

import server from "./server";

class App extends Component {
  state = {
      chats: undefined,
      selectedChat: undefined
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
    this.getChats();
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
        <ChatList className="ChatList" chats={this.state.chats} selectedChat={this.state.selectedChat} getChats={this.getChats} selectChat={this.selectChat} server={server}/>
        <Chat className="Chat" selectedChat={this.state.selectedChat}/>
      </div>
    );
  }
}

export default App;
