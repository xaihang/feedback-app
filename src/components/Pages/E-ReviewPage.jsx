import React from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
      <p>Review Your Feedback</p>
      <div className="feedback-info">
        <p>Feelings: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.support}</p>
        <p>Comments: {feedback.comments}</p>
      </div>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}
