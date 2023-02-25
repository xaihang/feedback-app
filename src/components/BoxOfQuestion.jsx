import React from 'react';
import Paper from '@mui/material/Paper';

export default function BoxOfQuestion({ children, ...props }) {
  return (
    <div className="card-question">
      <Paper sx={{ width: 600, height: 300, p: 2 }} {...props}>
        {children}
      </Paper>
    </div>
  );
}
