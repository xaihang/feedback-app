import React from 'react';
import Form from '../Form';
import SubHeader from '../SubHeader';

export default function UnderstandingPage() {
  return (
    <div>
      <SubHeader pageNumber={2} />
      <Form
        name="understanding"
        question={'How well are you understanding the content?'}
        url={'/supported'}
      />
    </div>
  );
}
