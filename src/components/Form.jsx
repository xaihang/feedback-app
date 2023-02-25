import React, { useState } from 'react';
import NextButton from './NextButton';

export default function Form({ name, question, type = 'number', url }) {

  const [feedBack, setFeedBack] = useState({
    name: '',
    value: null
  })

  const handleChange = (event) => {
    const name = event.target.name
    const value = name !== 'comments' ? Number(event.target.value) : event.target.value
    setFeedBack({
      name,
      value
    });
  };
  return (
    <div>
      <form>
        <label>{question}</label>
        <input type={type} name={name} value={feedBack.value || ''} onChange={handleChange}/>
      </form>
      <NextButton url={url} feedBack={feedBack}/>
    </div>
  );
}
