import React from 'react';
import './Header.css';
import NavBar from "../NavBar/NavBar";

const Header = () => (
    <>
        <header className="header">
            <div className="header-inner">
            <div className="header-logo">
                <p>Quotes Central</p>
            </div>
                <NavBar/>
            </div>
        </header>
    </>
);

export default Header;