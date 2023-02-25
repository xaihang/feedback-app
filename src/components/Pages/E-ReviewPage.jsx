import React from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import BoxOfQuestion from '../Form/BoxOfQuestion';

export default function ReviewPage() {
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
            title: 'Thank you for the feedback!',
          })
          .then(() => {
            dispatch({ type: 'CLEAR_FEEDBACK' });

            history.push('/');
          });
      })
      .catch((error) => {
        console.log('error in adding product to database', error);
      });
  };

  return (
    <div>
       <BoxOfQuestion elevation={3}>
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
      <Button onClick={handleSubmit} variant="contained">
      SUBMIT
      </Button>
      </BoxOfQuestion>
    </div>
  );
}
