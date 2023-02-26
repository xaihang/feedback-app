import React from 'react';
import BoxOfQuestion from '../Form/BoxOfQuestion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import heart from '../Pages/heart.png';

export default function ThankYouPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  //  when the "NEXT" button is clicked: 
  const handleNext = () => {
    // clears the feedback state in the store using dispatch
    dispatch({ type: 'CLEAR_FEEDBACK' });
      // navigate user back to first page of app 
    history.push('/');
  };

  return (
    <div className="thankyou-page">
      <BoxOfQuestion elevation={3}>
        <h2>Thank you for your feedback!</h2>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={heart} alt="heart" width="100" height="100" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handleNext}
            variant="contained"
            sx={{ width: '40px', padding: '8px 16px', mb: 4 }}
          >
            NEXT
          </Button>
        </Box>
      </BoxOfQuestion>
    </div>
  );
}
