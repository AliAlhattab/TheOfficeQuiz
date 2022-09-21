import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom';

let refresh = () => {
return window.location.reload();
}


function Nav() {
  return (
    <nav className='nav'>
        <NavLink className='nav__links' to='/home' exact><div className='nav__logo'></div></NavLink>
        <ul className='nav__list'>
            <NavLink to='/home' exact className={({ isActive }) => "nav__options" + (isActive ? "--selected" : "")} ><li className='nav__options'>Home</li></NavLink>
            <NavLink to='/leadersboard' className={({ isActive }) => "nav__options" + (isActive ? "--selected" : "")}><li className='nav__options'>Leadersboard</li></NavLink>
        </ul>
    </nav>
  )
}

export default Nav