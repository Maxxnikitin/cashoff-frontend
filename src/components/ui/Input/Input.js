import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <input
      className='form__input'
      id={props.id}
      type='text'
      placeholder={props.placeholder}
      name={props.name}
      minLength='2'
      maxLength='30'
      required
    />
  )
}

export default Input;
