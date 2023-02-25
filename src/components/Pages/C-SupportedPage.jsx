import React from 'react'
import Form from '../Form';
import NextButton from '../NextButton';
import SubHeader from '../SubHeader';

export default function SupportedPage() {
  return (
    <div>      
      <SubHeader pageNumber={3} />
    <Form question={'How well are you being supported?'}/>
       <NextButton url={'/comments'}/>
    </div>
  )
}

