import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const NextButton = ({ url, feedBack }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goNext = () => {
    if (url === '/thankyou' || url === '/') {
      history.push(url);
      return;
    }

    if (feedBack?.value) {
      dispatch({ type: 'SET_FEEDBACK', payload: feedBack });
      history.push(url);
    } else {
      alert('Please enter the information');
    }
  };

  return <button onClick={goNext}>NEXT</button>;
};

export default NextButton;
