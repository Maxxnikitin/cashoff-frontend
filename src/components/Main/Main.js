import React from 'react';
import './Main.css';
import Table from '../Table/Table';

function Main(props) {
  return (
    <>
      <section className='page'>
        <h1 className='page__title'>Банки России</h1>
        {props.children}
      </section>
      <section className="photos content__photos">
      {props.banks.map((bank) => (
        <Table key={bank._id} bank={bank} onBankCick={props.onbankClick} />
      ))}
    </section>
  </>
  )
}

export default Main;
