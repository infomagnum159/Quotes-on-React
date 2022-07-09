import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => (
    <>
        <div className="nav-block">
                <ul className="nav-links">
                    <li><NavLink exact to="/"
                                 activeStyle={{textDecoration: 'underline'}}>Quotes</NavLink></li>
                    <li><NavLink exact to="/add-quote" activeStyle={{textDecoration: 'underline'
                                 }}>Submit New Quotes</NavLink></li>
                </ul>
        </div>
    </>
);

export default NavBar;