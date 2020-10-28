import React from 'react';
import './AddForm.css';
import Input from '../ui/Input/Input';
import FormButton from '../ui/FormButton/FormButton';

function AddForm(props) {
  const [bikValue, setBikValue] = React.useState('');
  const [nameValue, setNameValue] = React.useState('');
  const [corrAccountValue, setCorrAccountValue] = React.useState('');
  const [addressValue, setAddressValue] = React.useState('');

  function handleChangeBikInput(e) {
    setBikValue(e.target.value);
  }
  function handleChangeNameInput(e) {
    setNameValue(e.target.value);
  }
  function handleChangeCorrAccountInput(e) {
    setCorrAccountValue(e.target.value);
  }
  function handleChangeAddressInput(e) {
    setAddressValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateBank({
      bik: bikValue,
      name: nameValue,
      corrAccount: corrAccountValue,
      address: addressValue
    });
    setBikValue('');
    setNameValue('');
    setCorrAccountValue('');
    setAddressValue('');
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form__fieldset'>
        <legend className='form__title'>{props.title}</legend>
        <Input
          id='bik'
          placeholder='БИК'
          name='bik'
          minLength='9'
          maxLength='9'
          value={bikValue}
          onChange={handleChangeBikInput}
        />
        <Input
          id='name'
          placeholder='Название'
          name='name'
          minLength='2'
          maxLength='30'
          value={nameValue}
          onChange={handleChangeNameInput}
        />
        <Input
          id='corrAccount'
          placeholder='Корсчёт'
          name='corrAccount'
          minLength='20'
          maxLength='20'
          value={corrAccountValue}
          onChange={handleChangeCorrAccountInput}
        />
        <Input
          id='address'
          placeholder='Адрес'
          name='address'
          minLength='2'
          maxLength='100'
          value={addressValue}
          onChange={handleChangeAddressInput}
        />
      </fieldset>
      <FormButton buttonText={props.buttonText} onClick={handleSubmit} />
    </form>
  )
}

export default AddForm;
