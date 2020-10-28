import React from 'react';
import './FormButton.css';

function FormButton(props) {
  return (
    <button className='form-button' type='submit' onClick={props.onClick}>{props.buttonText}</button>
  )
}

export default FormButton;
