import React from 'react';
import BoxOfQuestion from '../Form/BoxOfQuestion';
import Form from '../Form/CommentForm';
import SubHeader from '../Header/SubHeader';

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
