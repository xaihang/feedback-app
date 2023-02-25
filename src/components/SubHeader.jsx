import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function SubHeader({pageNumber}) {
  const progress = (pageNumber - 1) / 3 * 100; // Calculate progress percentage

  return (
    <>
       <p>{pageNumber} of 4 pages</p>
      <CircularProgress variant="determinate" value={progress} />
   
    </>
  );
}
