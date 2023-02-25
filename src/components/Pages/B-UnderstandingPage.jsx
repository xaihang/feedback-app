import React from 'react';
import BoxOfQuestion from '../Form/BoxOfQuestion';
import HoverRating from '../Form/Rating';
import SubHeader from '../Header/SubHeader';

export default function UnderstandingPage() {
  return (
    <div>
      <SubHeader pageNumber={2} />
      <BoxOfQuestion elevation={3}>
      <HoverRating
        name="understanding"
        question={'How well are you understanding the content?'}
        url={'/supported'}
      />
       </BoxOfQuestion>
    </div>
  );
}
