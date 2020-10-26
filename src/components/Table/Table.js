import React from 'react';
import './Table.css';
import BankCard from '../BankCard/BankCard';

function Table(props) {
  return (
    <table className='table'>
      <tr className='table__headers'>
        <th className='table__header'>БИК</th>
        <th className='table__header'>Название</th>
        <th className='table__header'>Корсчёт</th>
        <th className='table__header'>Адрес</th>
      </tr>
      <BankCard />
    </table>
  )
}

export default Table;
