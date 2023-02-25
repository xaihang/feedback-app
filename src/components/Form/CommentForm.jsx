import React, { useState } from 'react';
import NextButton from '../NextButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function Form({ name, question, url }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const goNext = () => {
    const feedBack = {
      name,
      value,
    };

    dispatch({ type: 'SET_FEEDBACK', payload: feedBack });

    history.push(url);
  };
  return (
    <>
      <h2>{question}</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
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

      <Button onClick={goNext} variant="contained">
        NEXT
      </Button>
    </>
  );
}
