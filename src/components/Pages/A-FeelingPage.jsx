import React from 'react';
import Form from '../Form/CommentForm';
import HoverRating from '../Form/Rating';
import NextButton from '../NextButton';
import SubHeader from '../SubHeader';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FeelingPage() {
  return (
    <div>
      <SubHeader pageNumber={1} />

      {/* <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="comment" variant="outlined" />
      </Box> */}

      {/* <Form 
          name="feeling"
          question={'How are you feeling today?'} 
          url='/understanding'
          /> */}
      <HoverRating
        question={'How are you feeling today?'}
        name="feeling"
        url="/understanding"
      />
    </div>
  );
}
