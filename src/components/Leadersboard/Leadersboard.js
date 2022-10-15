import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Leadersboard.scss'

function Leadersboard() {

    const [leaderboard, getLeaderboard] = useState('')
    
    useEffect(() => {
        axios
        .get('http://localhost:8080/players')
        .then(response => {
            getLeaderboard(response.data)
            console.log(response.data)
        }, [])

    })

  return (
    <section className='leadersboard'>
        <div className='leadersboard__title'>
            <h1 className='leadersboard__text'>The Office</h1>
            <h1 className='leadersboard__text'>Leadersboard</h1>
        </div>
        <div className='leadersboard__info'>
            <ul className='leadersboard__list'>
                <li className='leadersboard__section'>Rank</li>
                <li className='leadersboard__section'>Name</li>
                <li className='leadersboard__section'>Score</li>
            </ul>
        </div>
        { leaderboard?.map((data) =>{
            return(
                <div className='leadersboard__players'>
                <ul className='leadersboard__list'>
                    <li className='leadersboard__rank'>1</li>
                    <li className='leadersboard__rank'>{data.name}</li>
                    <li className='leadersboard__rank'>{data.score}</li>
                </ul>
            </div>

            )
        })
}
    </section>
  )
}

export default Leadersboard