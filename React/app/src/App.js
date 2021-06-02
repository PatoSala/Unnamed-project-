import logo from './logo.svg';
import './App.css';
import ChatList from './ChatList';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import { Box, Stack } from "@chakra-ui/react"
import socketClient  from "socket.io-client";
const SERVER = "http://localhost:3000/api/getchats"
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
 

  return (
    <Box className="app">
      <Stack className="app_body">
        <ChatList  chats = {state.chats} selectedChat={state.selectedChat} loading = {state.loading} selectChat = {state.selectChat}/>
        <Chat selectedChat = {state.selectedChat}/>
      </Stack>
    </Box>
  );
}


  

export default App;
