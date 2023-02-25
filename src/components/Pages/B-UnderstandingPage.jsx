import React from 'react';
import Form from '../Form/CommentForm';
import HoverRating from '../Form/Rating';
import SubHeader from '../SubHeader';

export default function UnderstandingPage() {
  return (
    <div>
      <SubHeader pageNumber={2} />
      {/* <Form
        name="understanding"
        question={'How well are you understanding the content?'}
        url={'/supported'}
      /> */}
      <HoverRating
        name="understanding"
        question={'How well are you understanding the content?'}
        url={'/supported'}
      />
    </div>
  );
}
