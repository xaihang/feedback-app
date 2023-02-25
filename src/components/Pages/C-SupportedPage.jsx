import React from 'react';
import Form from '../Form';
import SubHeader from '../SubHeader';

export default function SupportedPage() {
  return (
    <div>
      <SubHeader pageNumber={3} />
      <Form
        name="support"
        question={'How well are you being supported?'}
        url={'/comments'}
      />
    </div>
  );
}
