import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import OnlineIcon from '../../icons/online.png';

const Users = ({ users, room }) => (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#3F51B5' }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit">
            <ViewListIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Active Users ({users.length})</Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Box>
      {
        users
          ? (
            <>
              {users.map(({ name }) => (
                <div key={name}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center', 
                    width: '100%', 
                    padding: '15px 0 15px 15px',
                    borderBottom: '1px dashed #42A5F5'
                    }}>
                    <img src={OnlineIcon} alt=""/>&nbsp;<b>{name}</b></Box>
                </div>
              ))}
            </>
          )
          : null
      }
    </Box>


  </>
);

export default Users;