import React, {useState} from 'react'
import './TextInput.scss';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

function TextInput() {

  const [name, setName] = useState('')
  const [goToGame, setGoToGame] = useState(false);
  const isValid = name != null && name.trim().length > 0;

  if (goToGame) {
    return <Navigate to='/game'/>
  }

  let changeHandler = (e) => {
    setName(e.target.value)
  }

  let submit = (e) => {
    e.preventDefault();
    
    axios
      .post('http://localhost:8080/players', {
        name: name
      })
      .then((response) => {
        setGoToGame(true)
      })
      .catch((err) => {
        console.log('something went wrong')
      })
  }

  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  return (
    <form className='form' onSubmit={submit}>
        <input className='form__name' id='name' name='name' type='text' placeholder='Your Name' onChange={changeHandler} />
        <div className='form__submit'>
        <button className='form__button' disabled={!isValid}>Start Game!</button>
        </div>
        <h1 className='form__text'>Are you ready {capitalizeFirstLetter(name)}?</h1>
    </form>
  )
}

export default TextInput;