import React from 'react';
import Form from '../Form/CommentForm';
import HoverRating from '../Form/Rating';
import SubHeader from '../SubHeader';

export default function SupportedPage() {
  return (
    <div>
      <SubHeader pageNumber={3} />
      <HoverRating
        name="support"
        question={'How well are you being supported?'}
        url={'/comments'}
      />
    </div>
  );
}
