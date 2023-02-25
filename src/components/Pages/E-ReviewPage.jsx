import React from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ReviewPage({ goNext, url }) {
  const feedback = useSelector((store) => store.reducer);
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    console.log('feedback', feedback);
    axios
      .post('/', feedback)
      .then(() => {
        swal
          .fire({
            title: 'Feedback has been submitted!',
          })
          .then(() => {
            dispatch({ type: 'CLEAR_FEEDBACK' });
          });
      })
      .catch((error) => {
        console.log('error in adding feedback to database', error);
      });
  };

  const handleNext = () => {
    history.push('/thankyou');
  };


  const theme = createTheme({
    palette: {
      success: {
        main: '#4caf50',
      },
    },
  });


  return (
    <div className="review-page">
      <Paper
        sx={{ width: 500, height: 320, p: 2, mb: 4, margin: '0 auto' }}
        elevation={3}
      >
        <h2>Review Your Feedback</h2>
        <div className="feedback-info">
          <p>
            <strong>Feelings:</strong> <em>{feedback.feeling}</em>
          </p>
          <p>
            <strong>Understanding:</strong> <em>{feedback.understanding}</em>
          </p>
          <p>
            <strong>Support:</strong> <em>{feedback.support}</em>
          </p>
          <p>
            <strong>Comments:</strong> <em>{feedback.comments}</em>
          </p>
        </div>

<ThemeProvider theme={theme}>
      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{ width: '40px', padding: '8px 16px', mr: 2, bgcolor: 'success.main', '&:hover': { bgcolor: 'success.dark' } }}
      >
        SUBMIT
      </Button>
    </ThemeProvider>

        <Button
          onClick={handleNext}
          variant="contained"
          feedback={feedback}
          sx={{ width: '40px', padding: '8px 16px' }}
        >
          NEXT
        </Button>
      </Paper>
    </div>
  );
}
