import React from 'react'
import '../Scss/subscribe.scss'
import FaceBook from '../Images/facebook.png'
import Twitter from '../Images/twitter.png'
import Instagram from '../Images/instagram.png'
import In from '../Images/in.png'

const Subscribe = () => {
  return (
    <section className='subscribe'>
        <h1>Subscribe to Atelier <br /> Newsletter</h1>

        <br />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

        <div className="column">
            <button>Data Use Policy.</button>
            <button className='down'>“Subscribe”</button>
        </div>

        <div className='social'>
            <a href="#"><img src={FaceBook} alt="FaceBook" /></a>
            <a href="#"><img src={Twitter} alt="Twitter" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
            <a href="#"><img src={In} alt="In" /></a>
        </div>
        
    </section>
  )
}

export default Subscribe