import logo from './logo.svg';
import './App.css';
import ChatList from './ChatList';
import Chat from './Chat';
import { Component } from 'react';
import { Box, Stack } from "@chakra-ui/react"

class App extends Component {

  state = {
    loading: true,
    chats: null,
    selectedChat: undefined,
  }

  async componentDidMount() {
    const url = "http://localhost:3000/api/getchats";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({chats: data, loading: false});
    console.log(data);
  }

  selectChat = (chat) => {
    this.setState({selectedChat: chat});
    console.log(this.state.selectedChat);
  }

  render () {
  return (
    <Box className="app">
      <Stack className="app_body">
       <ChatList chats = {this.state.chats} selectedChat={this.state.selectedChat} loading = {this.state.loading} selectChat = {this.selectChat}/>
        <Chat selectedChat = {this.state.selectedChat}/>
      </Stack>
    </Box>
  );
}}

export default App;
