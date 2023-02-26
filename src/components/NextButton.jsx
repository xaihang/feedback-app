import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// func takes in two props: url and feedBack
// It renders a "NEXT" button that, when clicked,
// checks if the input is valid and navigates to the next page of the form.
const NextButton = ({ url, feedBack }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // when the "NEXT" button is clicked:
  // it checks if the url prop is set to '/review', 
  // in which case it navigates to the review page. 
  // otherwise, it checks if the feedBack prop is valid by checking if it has a value property
  // if the feedBack is valid, it dispatches an action to update the feedback in the store 
  // and navigates to the next page
  // if the feedBack is invalid, it displays an alert to the user
  const goNext = () => { 
    //On comment page, can go to review page even if input id blank
    if (url === '/review') {
      history.push(url);
      return
    }

      // checks if the feedBack object has a truthy value property
      // uses the optional chaining operator '?'; 
      // this operator make sure that the code doesn't throw an error if feedBack is null or undefined.
    if (feedBack?.value ) {
      // dispatches an action to update the feedback in the store
      // SET_FEEDBACK action type and payload property are used to update 
      // the feedback state in the redux store
      dispatch({ type: 'SET_FEEDBACK', payload: feedBack });

      // navigates to the next page in the form, as specified by the url prop
      history.push(url);
    } else {
      alert('Please enter the information');
    }
  };

  return <button onClick={goNext}>NEXT</button>;
};
export default NextButton;
