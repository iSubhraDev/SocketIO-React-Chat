import React from 'react';
import Box from '@mui/material/Box';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';

const Messages = ({ messages, name }) => (
  <Box sx={{
    backgroundColor: '#F1F1F1',
    overflowY: 'auto',
    height: '82.333%',
    overflowX: 'hidden'
  }}>
    <ScrollToBottom className="messages">
      {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
  </Box>
);

export default Messages;