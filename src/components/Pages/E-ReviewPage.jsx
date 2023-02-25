import React from 'react';
import NextButton from '../NextButton';
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

export default function ReviewPage() {

  const feedback = useSelector(store => store.reducer);
  const swal = withReactContent(Swal);
 

  const handleSubmit = () => {
    console.log('feedback', feedback);
    axios
      .post("/", feedback)
      .then((response) => {
        // dispatch({ type: "CLEAR_FEEDBACK" });

        // swal
        //   .fire({
        //     title: "Thank you for the feedback!",
        //   })
        //   .then(() => {
        //     history.push("/");
        //   });
      })
      .catch((error) => {
        console.log("error in adding product to database", error);
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
       {/* <NextButton url={'/thankyou'}/> */}
       <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}
