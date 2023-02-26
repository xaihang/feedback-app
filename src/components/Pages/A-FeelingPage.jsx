import React from 'react';
import BoxOfQuestion from '../Form/BoxOfQuestion';
import HoverRating from '../Form/Rating';
import SubHeader from '../Header/SubHeader';

export default function FeelingPage() {
  return (
    <>
      <SubHeader pageNumber={1} />
      <BoxOfQuestion elevation={3}>
        <HoverRating
          question={'How are you feeling today?'}
          name="feeling"
          url="/understanding"
        />
      </BoxOfQuestion>
    </>
  );
}
