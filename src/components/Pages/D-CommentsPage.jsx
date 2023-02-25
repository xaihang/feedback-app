import React from 'react';
import BoxOfQuestion from '../BoxOfQuestion';
import Form from '../Form/CommentForm';
import SubHeader from '../SubHeader';

export default function CommentsPage() {
  return (
    <div>
      <SubHeader pageNumber={4} />
      <BoxOfQuestion elevation={3}>
        <Form
          name="comments"
          question={'Any comments you want to leave?'}
          url={'/review'}
        />
      </BoxOfQuestion>
    </div>
  );
}
