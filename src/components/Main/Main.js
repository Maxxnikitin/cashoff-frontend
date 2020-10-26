import React from 'react';
import './Main.css';
import Table from '../Table/Table';
import AddForm from '../AddForm/AddForm';
import { Route, Switch } from 'react-router-dom';

function Main(props) {
  return (
    <>
      <section className='page'>
        <h1 className='page__title'>Банки России</h1>
        {props.children}
        <Switch>
          <Route exact path='/'>
            <Table />
          </Route>
          <Route path='/add'>
            <AddForm />
          </Route>
        </Switch>
      </section>
  </>
  )
}

export default Main;
