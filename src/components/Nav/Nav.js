import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
        <Link className='nav__options' to='/'><div className='nav__logo'></div></Link>
        <ul className='nav__list'>
            <Link className='nav__options' to='/'><li className='nav__options'>Home</li></Link>
            <Link className='nav__options' to='/leadersboard'><li className='nav__options'>Leaderboard</li></Link>
        </ul>
    </nav>
  )
}

export default Nav