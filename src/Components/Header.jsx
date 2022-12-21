import React, { useEffect, useState } from 'react'
import { getTopNav } from '../Data/Navbars';
import '../Scss/header.scss'

const Header = () => {

    const [navItems, setNavItems] = useState([]);
    const [collapse, setCollapse] = useState('nav__menu');

    useEffect(() => {
        setNavItems(getTopNav());
    }, []);

    const onToggle = () => {
        collapse === 'nav__menu'
            ? setCollapse('nav__menu nav__collapse')
            : setCollapse('nav__menu');
    };

    return (
        <div className='container'>
            <nav className="nav">

                <a href='#' className='logo'>Atelier.</a>

                <div className="nav">
                    <ul className={collapse}>

                        {navItems.map((item) => (
                            <li key={item.id} className="nav__items">
                                <a href={item.href} className="nav__link"> {item.label} </a>
                            </li>
                        ))}

                    </ul>


                    <button>Buy Template</button>
                </div>



                <div className="toggler__icon" onClick={onToggle}>
                    <div className="line_1"></div>
                    <div className="line_2"></div>
                    <div className="line_3"></div>
                </div>

            </nav>
        </div>
    )
}

export default Header