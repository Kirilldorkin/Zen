import React from 'react'
import Header from '../Components/Header.jsx'
import '../Scss/style.scss'
import HeaderInfo from '../Components/HeaderInfo.jsx'
import Templates from '../Components/Templates.jsx'
import foto from '../Images/foto.png'
import Services from '../Components/Services.jsx'
import FollowMe from '../Images/follow.png'
import Subscribe from '../Components/Subscribe.jsx'
import Footer from '../Components/Footer.jsx'

const Home = () => {
    return (
        <>
            <Header />
            <HeaderInfo />
            <Templates />
            <img src={foto} className='foto' alt="foto" style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
            }} />
            <Services />
            <img src={FollowMe} className='foto' alt="foto" style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
            }} />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Home