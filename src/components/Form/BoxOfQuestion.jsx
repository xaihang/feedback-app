import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function BoxOfQuestion({ children, ...props }) {
  return (
    <div className="card-question">
      <Paper sx={{ width: 500, height: 200, p: 2, mb: 7  }} elevation={3}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }} {...props}>
          {children}
        </Box>
      </Paper>
    </div>
  );
}
