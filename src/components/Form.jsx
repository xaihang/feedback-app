import React from 'react'

export default function Form({question, type="number"}) {
  return (
        <form>
          <label>{question}</label>
          <input type={type}/>
        </form>
  )
}
