import React from 'react';
import './Form.css';

function Form(props) {
  return (
    <form
      className='form form__filter'
      name='form-filter'
      onSubmit={props.onSubmit}
    >
      <fieldset className='form__fieldset'>
        <legend className='form__title'>{props.title}</legend>
        {props.children}
      </fieldset>
    </form>
  )
}

export default Form;
