import logo from './logo.svg';
import './App.css';
import ChatList from './ChatList';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import { Box, Stack } from "@chakra-ui/react"
import socketClient  from "socket.io-client";
const SERVER = "http://localhost:3000/api/getchats"

var socket = socketClient ("http://localhost:3000");
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
});
const App = () => {

  const [state, setState] = useState({
    loading: true,
    chats: null,
    selectedChat: undefined,
  })
  const getData = async () => {
    const url = SERVER;
    const response = await fetch(url);
    const data = await response.json();
    setState({chats: data, loading: false});
    console.log(data);
  }
  useEffect(() => {
    getData()
  }, [])

  function selectChat(chat) {
    setState({...state, selectedChat: chat});
    console.log(state.selectedChat);
  }
 

  return (
    <Box className="app">
      <Stack className="app_body">
        <ChatList  chats = {state.chats} selectedChat={state.selectedChat} loading = {state.loading} selectChat = {selectChat}/>
        <Chat selectedChat = {state.selectedChat}/>
      </Stack>
    </Box>
  );
}


  

export default App;
