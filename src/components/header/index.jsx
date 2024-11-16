import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import Auth0 hooks
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/images/logo/logo111.png';
import logo2 from '../../assets/images/logo/logon.png'; 
import Button from '../button';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [showLogout, setShowLogout] = useState(false); // To toggle logout button visibility

    // Auth0 Hooks
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 300); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

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

    const toggleLogoutButton = () => {
        setShowLogout(!showLogout);
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

                    {/* Auth0 Login/Logout Button */}
                    {isAuthenticated ? (
                        <div className="user-info">
                            <img 
                                src={user.picture} 
                                alt={user.name} 
                                className="user-avatar" 
                                onClick={toggleLogoutButton} // Toggle logout on click
                            />
                            {/* Show Logout Button on larger screens or when toggled */}
                            {(showLogout || window.innerWidth > 768) && (
                                <Button 
                                    title="Logout" 
                                    onClick={() => logout({ returnTo: window.location.origin })} 
                                />
                            )}
                        </div>
                    ) : (
                        <Button title="Login" onClick={() => loginWithRedirect()} />
                    )}

                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
