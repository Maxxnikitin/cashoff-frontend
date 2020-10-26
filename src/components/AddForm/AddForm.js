import React from 'react';
import './AddForm.css';
import Input from '../ui/Input/Input';
import FormButton from '../ui/FormButton/FormButton';

function AddForm() {
  return (
    <form className='form'>
      <fieldset className='form__fieldset'>
        <legend className='form__title'>Заполните данные банка</legend>
        <Input id='bik' placeholder='БИК' name='bik' />
        <Input id='name' placeholder='Название' name='name' />
        <Input id='corrAccount' placeholder='Корсчёт' name='corrAccount' />
        <Input id='address' placeholder='Адрес' name='address' />
      </fieldset>
      <FormButton />
    </form>
  )
}

export default AddForm;
