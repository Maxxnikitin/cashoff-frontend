import React from 'react';
import './NavLinkButton.css';
import { NavLink } from 'react-router-dom';

function NavLinkButton(props) {
  return (
  <NavLink className='button' to={props.link}>{props.name}</NavLink>
  )
}

export default NavLinkButton;
