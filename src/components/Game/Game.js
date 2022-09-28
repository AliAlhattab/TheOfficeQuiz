import React, { useEffect, useState } from 'react'
import './Game.scss'
import axios from 'axios'

function Game() {

  const [quote, getQuote] = useState('')
  const [name, getName] = useState('')
  const [randomName, getRandomName] = useState([])

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

  }, [])

  useEffect((array) => {
    axios
    .get('https://www.officeapi.dev/api/characters/')
    .then(response => {
     getRandomName(response.data.data[Math.floor(Math.random() * response.data.data.length)].firstname)
    })
    .catch(err => {
      console.log('Cannot get character')
    });

  }, [])
  

  return (
    <div>
      <h1>{quote}</h1>
      <p>{name}</p>
      <p>{randomName}</p>
      <p>{randomName}</p>
      <p>{randomName}</p>
      
    </div>
  )
}

export default Game
