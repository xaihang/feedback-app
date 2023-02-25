import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../Header/logo.png';

export default function Header() {
  return (
    <AppBar position="static" sx={{ height: '130px' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', paddingTop: '15px'  }}>
      <img src={logo} alt="Logo" width="100" height="100" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '50px'  }}>
          Feedback!
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
