import React from 'react';
import './Navigation.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import { Route, Switch } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav'>
      <Switch>
        <Route exact path='/'>
          <NavLinkButton link='/add' name='Добавить новый банк или отредактировать существующий' />
        </Route>
        <Route path='/add'>
          <NavLinkButton link='/' name='Посмотреть список банков' />
        </Route>
      </Switch>
    </nav>
  )
}

export default Navigation;
