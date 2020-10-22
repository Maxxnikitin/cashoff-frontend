import React from 'react';
import './Table.css';

function Table(props) {
  return (
    <table>
      <tr>
        <th>БИК</th>
        <th>Название</th>
        <th>Корсчёт</th>
        <th>Адрес</th>
      </tr>
      <tr>
        <td>{props.bank.bik}</td>
        <td>{props.bank.name}</td>
        <td>{props.bank.corrAccount}</td>
        <td>{props.bank.address}</td>
      </tr>
    </table>
  )
}

export default Table;
