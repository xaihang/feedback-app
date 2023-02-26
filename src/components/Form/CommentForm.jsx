import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Form({ name, question, url }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  // updates the value state variable.
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // when the "NEXT" button is clicked
  // it saves the feedback and navigates to the next page
  const goNext = () => {
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
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          value={value}
          label="comment"
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={goNext}
          variant="contained"
          sx={{ width: '40px', padding: '8px 16px' }}
        >
          NEXT
        </Button>
      </Box>
    </>
  );
}
