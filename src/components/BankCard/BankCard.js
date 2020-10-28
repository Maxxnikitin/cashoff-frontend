import React from 'react';
import './BankCard.css';

function BankCard(props) {
  return (
    <tr className='table__rows' rey={props.bank._id}>
      <td className='table__row'>{props.bank.bik}</td>
      <td className='table__row'>{props.bank.name}</td>
      <td className='table__row'>{props.bank.corrAccount}</td>
      <td className='table__row'>{props.bank.address}</td>
    </tr>
  )
}

export default BankCard;
