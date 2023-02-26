import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// rating values to their corresponding labels
const labels = {
  1: 'Useless+',
  2: 'Poor+',
  3: 'Ok+',
  4: 'Good+',
  5: 'Excellent+',
};

// takes a rating value and returns a string with the number of stars and the corresponding label
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({ question, name, url }) {
  const [value, setValue] = React.useState(0); //  declares a state variable value and initializes it to 0
  const [hover, setHover] = React.useState(-1); // declares a state variable hover and initializes it to -1
  const dispatch = useDispatch();
  const history = useHistory();
  const swal = withReactContent(Swal);

  // when 'NEXT" button is clicked:
  // It checks if a value has been selected, and if so, 
  // saves the feedback and allow user to go to the next page
  // if not it will alert the user to select rating (validation)
  // before they can go to the next page
  const goNext = () => {
    if (value === 0) {
      swal.fire({
        title: 'Please select a value!',
      });
      return;
    }

    const feedBack = {
      // name holds the name of the current feedback question
      name,
       // value holds the user's response to the feedback question
      value,
    };
    // SET_FEEDBACK action type and payload property
    //  are used to update the feedback state in redux store
    //  payload property is set to the feedBack object that was created in the previous line
    dispatch({ type: 'SET_FEEDBACK', payload: feedBack });
    // navigates to the next page in the form, as specified by the url prop
    history.push(url);
  };

  return (
    <>
      <h2>{question}</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={1}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={goNext}
          variant="contained"
          sx={{ width: '40px', padding: '8px 16px', mb: 4 }}
        >
          NEXT
        </Button>
      </Box>
    </>
  );
}
