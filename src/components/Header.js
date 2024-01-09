import React from 'react';
import './header.css';

function Header() {
    
    return (
   
        <div className = 'header'>
            <div className = 'header-logo'>
                <div className = 'header-logo-text'>Avion</div>
            </div>
            <div className = 'header-content'>
                <div className = 'header-text'>
                    <div className = 'header-text-title'>Luxury homeware for people who love timeless design quality</div>
                    <div className="header-text-small">Shop the new Spring 2022 collection today</div>
                </div>
            </div>
        </div>
   
    )
}

export default Header