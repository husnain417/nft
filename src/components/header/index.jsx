import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/images/logo/logo111.png';
import logo2 from '../../assets/images/logo/logon.png'; // New logo for scroll state
import Button from '../button';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 300); // Toggle based on scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Only set up once when the component mounts

    const [menuActive, setMenuActive] = useState(false);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <NavLink to="/">
                            {/* Change logo based on scroll state */}
                            <img src={scroll ? logo2 : logo} alt="Crybox" />
                        </NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                        <ul id="menu-primary-menu" className="menu">
                            {menus.map((data, idx) => (
                                <li key={idx} className="menu-item">
                                    <a href={data.links}>{data.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button title="join discord" onClick={() => scrollToSection('contact')} />

                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
