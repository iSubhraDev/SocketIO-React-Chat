import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import ForumIcon from '@mui/icons-material/Forum';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconAvatar from '../../icons/avatar.jpg';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: '-1px',
      left: '-1px',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  }
}));

const InfoBar = ({ room, name }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar 
    position="static"
    sx={{ backgroundColor: '#2196F3' }}
    elevation={0}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit">
          <ForumIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{name}</Typography>
        <IconButton sx={{ p: 0 }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt={name} src={IconAvatar} />
          </StyledBadge>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default InfoBar;