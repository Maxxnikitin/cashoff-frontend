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
      minLength={props.minLength}
      maxLength={props.maxLength}
      required
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input;
