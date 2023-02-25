import React from 'react'
import BoxOfQuestion from '../Form/BoxOfQuestion'
import Box from '@mui/material/Box';
import heart from '../Pages/heart.png';


export default function ThankYouPage() {
  return (
    <div className="thankyou-page">
      <BoxOfQuestion elevation={3}>
        <h2>Thank you for your feedback!</h2>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={heart} alt="heart" width="100" height="100" />
        </Box>
      </BoxOfQuestion>
    </div>
  );
}
