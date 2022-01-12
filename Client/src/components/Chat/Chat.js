import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Users from '../Users/Users';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Grid from '@mui/material/Grid';

const ENDPOINT = 'https://isubhra-socket-chat.herokuapp.com/';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <Grid
      sx={{ overflow: 'hidden' }}
      container>
      <Grid 
      item 
      xs={12} 
      display={{ xs: 'none', md: 'block', lg: 'block' }}
      md={3}
      lg={3}
      sx={{ height: '100vh' }}>
        <Users users={users} room={room} />
      </Grid>
      <Grid 
      item 
      xs={12} 
      md={9}
      lg={9}
      sx={{ height: '100vh' }}>
        <InfoBar room={room} name={name} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Grid>
    </Grid>
  );
}

export default Chat;