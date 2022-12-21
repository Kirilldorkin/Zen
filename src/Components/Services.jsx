import React from 'react'
import '../Scss/services.scss'
import WebLogo from '../Images/Web.png'
import UILogo from '../Images/UI.png'
import SeoLogo from '../Images/Seo.png'

const Services = () => {
    return (
        <section className='services'>

            <p>Our Core Features</p>

            <br />

            <h1>Our Services</h1>

            <div className="grid">
                <div className="border">
                    <img src={WebLogo} alt="" />
                    <h3>Web Design</h3>
                    <p>Suspendisse varius enim in</p>
                    <p className='small__text'>cursus id rutrum imperdiet. eros elementum tristique.</p>
                </div>

                <div className="border">
                    <img src={UILogo} alt="" />
                    <h3>UI/UX Design</h3>
                    <p>Suspendisse varius enim in</p>
                    <p className='small__text'>cursus id rutrum imperdiet. eros elementum tristique.</p>
                </div>

                <div className="border">
                    <img src={SeoLogo} alt="" />
                    <h3>SEO & Marketing</h3>
                    <p>Suspendisse varius enim in</p>
                    <p className='small__text'>cursus id rutrum imperdiet. eros elementum tristique.</p>
                </div>
            </div>

        </section>
    )
}

export default Services