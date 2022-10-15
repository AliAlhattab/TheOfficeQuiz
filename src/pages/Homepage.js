import React from 'react'
import Hero from '../components/Hero/Hero'
import TextInput from '../components/TextInput/TextInput'


function Homepage() {

  sessionStorage.removeItem('id');

  return (
    <section>
      <Hero/>
      <TextInput/>
    </section>
  )
}

export default Homepage