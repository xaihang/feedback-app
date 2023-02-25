import React from 'react'
import Form from '../Form';
import NextButton from '../NextButton';
import SubHeader from '../SubHeader';

export default function CommentsPage() {
  return (
    <div>      
    <SubHeader pageNumber={4} />
  <Form type="text" question={'Any comments you want to leave?'}/>
       <NextButton url={'/review'}/>
    </div>
  )
}
