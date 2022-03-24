import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to Rest Countries Travel</h1>
            <nav className = 'menu mt-5'>
                <a href="/Home">Home</a>
                <a href="/Country">Country</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;