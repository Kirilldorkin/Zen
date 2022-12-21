import React from 'react'
import '../Scss/footer.scss'

const Footer = () => {
  return (
    <section className='footer'>
        <p>Powered by <span style={{color: '#FFAE2B'}} >Webflow</span></p>

        <p className='gold'>Licenses <span>|</span> Style Guide <span>|</span> Instruction</p>
    </section>
  )
}

export default Footer