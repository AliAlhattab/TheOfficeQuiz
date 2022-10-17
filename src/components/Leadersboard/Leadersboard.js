import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Leadersboard.scss'

function Leadersboard() {

    const [leaderboard, getLeaderboard] = useState([])

    let counter = 1;
    
    useEffect(() => {
        axios
        .get('http://localhost:8080/players')
        .then(response => {
            
            getLeaderboard(response.data.sort((a, b) => b.score - a.score));

        }, [])

    })

   

  return (
    <section className='leadersboard'>
        <div className='leadersboard__title'>
            <h1 className='leadersboard__text'>Leadersboard</h1>
        </div>
        <div className='leadersboard__container'>
        <div className='leadersboard__info'>
            <ul className='leadersboard__list'>
                <li className='leadersboard__section'>Rank</li>
                <li className='leadersboard__section'>Name</li>
                <li className='leadersboard__section'>Score</li>
            </ul>
        </div>
        { leaderboard.map((data) => {
           

            return(
                <div className='leadersboard__players'>
                <ul className='leadersboard__rankList' key={data.id}>
                    <li className='leadersboard__rank'>{counter++}</li>
                    <li className='leadersboard__rank'>{data.name}</li>
                    <li className='leadersboard__rank'>{+data.score}</li>
                </ul>
            </div>

            )
        }) 
}
</div>
    </section>
  )
}

export default Leadersboard