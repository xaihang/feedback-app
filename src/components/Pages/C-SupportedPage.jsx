import React from 'react';
import BoxOfQuestion from '../BoxOfQuestion';
import HoverRating from '../Form/Rating';
import SubHeader from '../SubHeader';

export default function SupportedPage() {
  return (
    <div>
      <SubHeader pageNumber={3} />
      <BoxOfQuestion elevation={3}>
      <HoverRating
        name="support"
        question={'How well are you being supported?'}
        url={'/comments'}
      />
      </BoxOfQuestion>
    </div>
  );
}
