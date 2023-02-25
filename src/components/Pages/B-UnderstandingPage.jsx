import React from 'react'
import Form from '../Form';
import NextButton from '../NextButton';
import SubHeader from '../SubHeader';

export default function UnderstandingPage() {
  return (
    <div>
            <SubHeader pageNumber={2} />
        <Form question={'How well are you understanding the content?'}/>
       <NextButton url={'/supported'}/>
    </div>

  )
}
