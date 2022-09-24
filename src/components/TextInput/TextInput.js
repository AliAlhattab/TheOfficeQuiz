import React, {useState} from 'react'
import './TextInput.scss';

function TextInput() {

  const [name, setName] = useState('')

  let changeHandler = (e) => {
    setName(e.target.value)
  }

  let submit = (e) => {
    e.preventDefault();
    console.log(name)
  }

  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <form className='form' onSubmit={submit}>
        <input className='form__name' id='name' name='name' type='text' placeholder='Your Name' onChange={changeHandler} />
        <div className='form__submit'>
        <button className='form__button'>Start Game!</button>
        </div>
        <h1 className='form__text'>Are you ready {capitalizeFirstLetter(name)}?</h1>
    </form>
  )
}

export default TextInput