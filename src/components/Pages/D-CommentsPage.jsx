import React from 'react';
import Form from '../Form';
import SubHeader from '../SubHeader';

export default function CommentsPage() {
  return (
    <div>
      <SubHeader pageNumber={4} />
      <Form
        name="comments"
        type="text"
        question={'Any comments you want to leave?'}
        url={'/review'}
      />
    </div>
  );
}
