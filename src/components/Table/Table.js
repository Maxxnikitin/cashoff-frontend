import React from 'react';
import './Table.css';
import BankCard from '../BankCard/BankCard';
import Input from '../ui/Input/Input';

function Table(props) {

  return (
    <table className='table'>
      <thead>
        <tr className='table__headers'>
          <th className='table__header'>БИК</th>
          <th className='table__header'>Название</th>
          <th className='table__header'>Корсчёт</th>
          <th className='table__header'>Адрес</th>
        </tr>
        <tr className='table__headers'>
          <th className='table__header'>
            <Input
              id='bik'
              placeholder='Поиск по БИК'
              name='bik'
              minLength='9'
              maxLength='9'
              onChange={props.onChangeBik}
            />
          </th>
          <th className='table__header'>
            <Input
              id='name'
              placeholder='Поиск по названию'
              name='name'
              minLength='2'
              maxLength='30'
              onChange={props.onChangeName}
            />
          </th>
          <th className='table__header'></th>
          <th className='table__header'></th>
        </tr>
      </thead>
      <tbody>
        {props.banks.map((bank) => (
          <BankCard key={bank._id} bank={bank} />
        ))}
      </tbody>
    </table>
  )
}

export default Table;
