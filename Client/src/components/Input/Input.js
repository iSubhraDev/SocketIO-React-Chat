import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const CustomInput = styled('input')({
  display: 'none',
});

const Input = ({ setMessage, setFile, sendMessage, message }) => (
  <Box sx={{ display: 'flex' }}>
    <TextField
      variant='outlined'
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          border: '1px solid #ECEFF1'
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none'
        }
      }}
      fullWidth
      autoComplete='off'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <label style={{ display: 'flex', width: '65px', justifyContent: 'center' }}>
      <CustomInput 
      accept="image/*" 
      type="file" 
      onChange={({ target: { files } }) => setFile(files)}
      onClick={ e => (e.target.value = null) } />
      <IconButton disableRipple color="info" component="span">
        <Tooltip title="Upload Photo" placement="left">
          <PhotoCamera />
        </Tooltip>
      </IconButton>
    </label>
    <Button
      disableElevation
      sx={{ borderRadius: 0 }}
      variant="contained"
      endIcon={<SendIcon sx={{ marginLeft: '-8px' }} />}
      onClick={e => sendMessage(e)}>
    </Button>
  </Box>
)

export default Input;