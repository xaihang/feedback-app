import React from 'react';
import NextButton from '../NextButton';
import { useSelector } from 'react-redux';

export default function ReviewPage() {
  const feedback = useSelector(store => store.reducer);
  console.log('feedback!!!', feedback)
  return (
    <div>
<p>Review Your Feedback</p>
<div className="feedback-info">
          <p>Feelings: {feedback.feeling}</p>
          <p>Understanding: {feedback.understanding}</p>
          <p>Support: {feedback.support}</p>
          <p>Comments: {feedback.comments}</p>
        </div>
       <NextButton url={'/thankyou'}/>
    </div>
  )
}
