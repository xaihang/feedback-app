import React, { useState } from 'react';
import NextButton from './NextButton';

export default function Form({ name, question, type = 'number', url }) {

  const [feedBack, setFeedBack] = useState({
    name: '',
    value: ''
  })

  const handleChange = (event) => {
    setFeedBack({
      name: event.target.name,
      value: event.target.value
    });
  };
  return (
    <div>
      <form>
        <label>{question}</label>
        <input type={type} name={name} value={feedBack.value} onChange={handleChange}/>
      </form>
      <NextButton url={url} feedBack={feedBack}/>
    </div>
  );
}
