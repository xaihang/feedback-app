import { useHistory } from 'react-router-dom';

const NextButton = ({url}) => {

    const history = useHistory();

    const goNext = () => {
        history.push(url);
      };


  return (
    <button onClick={goNext}>NEXT</button>
  )
}
export default NextButton; 