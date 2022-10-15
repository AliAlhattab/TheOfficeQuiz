import React from 'react'

function Leadersboard() {


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
        <div className='leadersboard__players'>
            <ul className='leadersboard__list'>
                <li className='leadersboard__rank'>1</li>
                <li className='leadersboard__rank'>Ali</li>
                <li className='leadersboard__rank'>10</li>
            </ul>
        </div>
    </section>
  )
}

export default Leadersboard