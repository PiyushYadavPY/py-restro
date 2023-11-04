import React from 'react'
import Herosection from './herosection'
import Herosection2 from './herosecction2'
import Navbar from './navbar'
import Reviews from './reviews'
import Footer from './footer'
function Home() {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Herosection2/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home