import React from 'react';
import ReactEmoji from 'react-emoji';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconAvatar from '../../../icons/avatar.jpg';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  if (user === name) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', border: '1px solid transparent', marginRight: '15px' }}>
          <Tooltip title={name} placement="right">
            <Avatar alt={name} src={IconAvatar} />
          </Tooltip>
          <Box sx={{
            display: 'flex',
            background: '#2196F3',
            padding: '15px 20px',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            margin: '15px 15px'
          }}>
            <Typography sx={{ fontSize: '14px', color: '#FFF', lineHeight: '1.5' }}>{ReactEmoji.emojify(text)}</Typography>
          </Box>
        </Box>
      )
      : (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', border: '1px solid transparent', marginLeft: '15px' }}>
          <Box sx={{
            display: 'flex',
            background: '#2196F3',
            padding: '15px 20px',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '0',
            borderBottomLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            margin: '15px 15px',
          }}>
            <Typography sx={{ fontSize: '14px', color: '#FFF', lineHeight: '1.5' }}>{ReactEmoji.emojify(text)}</Typography>
          </Box>
          <Tooltip title={user} placement="right">
            <Avatar alt={user} src={IconAvatar} />
          </Tooltip>
        </Box>
      )
  );
}

export default Message;