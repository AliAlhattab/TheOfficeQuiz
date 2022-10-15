import React from 'react'
import Leadersboard from '../components/Leadersboard/Leadersboard'

function Leaderboard() {

  sessionStorage.removeItem('id');
  
  return (
    <section>
      <Leadersboard/>
    </section>
  )
}

export default Leaderboard