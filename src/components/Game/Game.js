import React, { useEffect, useState } from 'react'
import './Game.scss'
import axios from 'axios'

function Game() {

  const [quote, getQuote] = useState('')
  const [firstName, getFirstName] = useState('')
  const [lastName, getLastName] = useState('')
  const [randomFirstName, getRandomFirstName] = useState('')
  const [randomLastName, getRandomLastName] = useState('')

  useEffect(() => {
    axios
    .get('https://www.officeapi.dev/api/quotes/random')
    .then(response => {
      getQuote(response.data.data.content)
      getFirstName(response.data.data.character.firstname)
      getLastName(response.data.data.character.lastname)
      console.log(response.data.data)
    })
    .catch(err => {
      console.log('Cannot get quote')
    });

  }, [])

  useEffect((array) => {
    axios
    .get('https://www.officeapi.dev/api/characters/')
    .then(response => {
     getRandomFirstName(response.data.data[0].firstName)
      console.log(response.data.data)
    })
    .catch(err => {
      console.log('Cannot get character')
    });

  }, [])
  

  return (
    <div>
      <h1>{quote}</h1>
      <h2>{firstName} {lastName}</h2>
      <p>{randomFirstName}</p>
    </div>
  )
}

export default Game
