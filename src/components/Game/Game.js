import React, { useEffect, useState } from 'react';
import './Game.scss';
import axios from 'axios';
import logo from '../../assets/images/dunder_mifflin.png';
import {Navigate} from 'react-router-dom';

function Game() {

  const [quote, getQuote] = useState('')
  const [name, getName] = useState('')
  const [randomName1, getRandomName1] = useState([])
  const [randomName2, getRandomName2] = useState([])
  const [randomName3, getRandomName3] = useState([])
  const [counter, getCounter] = useState(0)
  const [goToLeadersboard, setGoToLeadersboard] = useState(false);

  useEffect(() => {
    axios
    .get('https://www.officeapi.dev/api/quotes/random')
    .then(response => {
      getQuote(response.data.data.content)
      getName(response.data.data.character.firstname)
    })
    .catch(err => {
      console.log('Cannot get quote')
    });

  }, [counter])

  useEffect(() => {
    axios
    .get('https://www.officeapi.dev/api/characters/')
    .then(response => {
     getRandomName1(response.data.data[Math.floor(Math.random() * response.data.data.length)].firstname)
     getRandomName2(response.data.data[Math.floor(Math.random() * response.data.data.length)].firstname)
     getRandomName3(response.data.data[Math.floor(Math.random() * response.data.data.length)].firstname)

    })
    .catch(err => {
      console.log('Cannot get character')
    });

  }, [counter])


  if (goToLeadersboard) {
    return <Navigate to='/leadersboard'/>
  }

  let submit = (e) => {
    e.preventDefault();

    if(e.target.value === name) {
      getCounter(counter + 1)

    

    } else {
      setGoToLeadersboard(true)
      alert(`Good Try! Your Score is: ${counter}`)
    }

  }

  

  return (
    <form className='game'>
      <div className='game__image'>
      <img className='game__logo' src={logo} alt='Dunder Mifflin Logo' />
      </div>
      <div className='game__instructions'>
        <p className='game__text'>Who said this quote?</p>
      </div>
      <div className='game__question'>
      <h1 className='game__quote'>{quote}</h1>
      </div>
      <div className='game__button'>
      <button className='game__option' value={name} onClick={submit}>{name}</button>
      <button className='game__option' value={randomName1} onClick={submit}>{randomName1}</button>
      <button className='game__option' value={randomName2} onClick={submit}>{randomName2}</button>
      <button className='game__option' value={randomName3} onClick={submit}>{randomName3}</button>
      </div>
      <div className='game__counter'>
        <p className='game__score'>Your Score: {counter}</p>
      </div>
      
    </form>
  )
}

export default Game
