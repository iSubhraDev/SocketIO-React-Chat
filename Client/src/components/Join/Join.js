import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Users from '../Users/Users';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='backgroudWrapper'>
      <Grid
        sx={{ height: '100vh', padding: '0 50px' }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} md={4}>
          <Card raised sx={{ padding: '20px 15px', borderRadius: '10px' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ fontWeight: '700', color: '#3F51B5' }} variant="h4">Join a Chat 💬</Typography>
              </Box>
              <Box sx={{ marginTop: '25px' }}>
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '5px',
                      border: '2px solid #ECEFF1'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  }}
                  fullWidth
                  placeholder="Your Name"
                  autoComplete='off'
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '5px',
                      border: '2px solid #ECEFF1'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  }}
                  fullWidth
                  placeholder="Your Room"
                  autoComplete='off'
                  type="text"
                  onChange={(event) => setRoom(event.target.value)} />
              </Box>
              <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <Link
                  onClick={e => (!name || !room) ? e.preventDefault() : null}
                  to={`/chat?room=${room}&name=${name}`}>
                  <Button
                    disableElevation
                    variant='contained'
                    type="submit"
                  >Login
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
