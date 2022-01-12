import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Input = ({ setMessage, sendMessage, message }) => (
    <Box sx={{ display: 'flex' }}>
      <TextField
        variant='outlined'
        sx={{
          '& .MuiOutlinedInput-root': { 
            borderRadius: 0,
            border: '1px solid #ECEFF1'
          },
          '& .MuiOutlinedInput-notchedOutline' : {
            border: 'none'
          }
        }}
        fullWidth
        autoComplete='off'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <Button
        disableElevation
        sx={{ borderRadius: 0 }}
        variant="contained"
        endIcon={<SendIcon sx={{ marginLeft: '-8px' }} />}
        onClick={e => sendMessage(e)}></Button>
    </Box>
)

export default Input;