import React from 'react'
import Form from '../Form';
import NextButton from '../NextButton';
import SubHeader from '../SubHeader';

export default function FeelingPage({goNext}) {

  return (
    <div>
      <SubHeader pageNumber={1} />
        <Form 
          name="feeling"
          question={'How are you feeling today?'} 
          url='/understanding'
          goNext={goNext}
          />
        </div>
  );
};
