import React from 'react';
import ReactEmoji from 'react-emoji';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Image from './Image';
import IconAvatar from '../../../icons/avatar.jpg';

const blockContainer = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '15px',
  marginLeft: '15px'
}

const textBox = {
  display: 'flex',
  background: '#2196F3',
  padding: '15px 20px',
  margin: '15px 15px',
  wordBreak: 'break-word'
}

const imageBox = {
  display: 'flex',
  padding: '5px',
  background: '#FAFAFA',
  border: '1px solid #CFD8DC',
  borderRadius: '5px',
  margin: '15px 15px'
}

const Message = ({ message: { message, user, type, mimeType, file, fileName }, name }) => {

  let isSentByCurrentUser = false;

  if (user === name) {
    isSentByCurrentUser = true;
  }

  const blob = file && new Blob([file], { type: mimeType });

  return (
    isSentByCurrentUser
      ? (
        <Box sx={blockContainer} style={{ justifyContent: 'flex-end' }}>
          <Tooltip title={name} placement="left">
            <Avatar alt={name} src={IconAvatar} />
          </Tooltip>
          {type === 'text' ? (
            <Box sx={textBox} style={{ borderRadius: '25px 0 25px 25px' }}>
              <Typography sx={{ fontSize: '14px', color: '#FFF', lineHeight: '1.5' }}>{ReactEmoji.emojify(message)}</Typography>
            </Box>) : ("")}
          {mimeType ? (
            <Box sx={imageBox}>
              <Image fileName={fileName} blob={blob} />
            </Box>) : ("")}
        </Box>
      ) : (
        <Box sx={blockContainer} style={{ justifyContent: 'flex-start' }}>
          {type === 'text' ? (
            <Box sx={textBox} style={{ borderRadius: '0 25px 25px 25px' }}>
              <Typography sx={{ fontSize: '14px', color: '#FFF', lineHeight: '1.5' }}>{ReactEmoji.emojify(message)}</Typography>
            </Box>) : ("")}
          {mimeType ? (
            <Box sx={imageBox}>
              <Image fileName={fileName} blob={blob} />
            </Box>) : ("")}
          <Tooltip title={user} placement="right">
            <Avatar alt={user} src={IconAvatar} />
          </Tooltip>
        </Box>
      )
  );
}

export default Message;