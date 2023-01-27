import { Link } from "@aws-amplify/ui-react";
import React, { Component } from "react";
import '../index.css';

import { BrowserRouter as Router, Link as ReactRouterLink, Route } from 'react-router-dom';

import { Routers } from './Routes';

export function Header() {
    return(
        <Router>
                <div className="header">
                    <nav className="navbar">
                        <ul>
                            <div className="navigation-menu">
                                <li id="nav-item">
                                    <img src="https://imgtr.ee/images/2023/01/26/GZ2ts.png" alt="Profile Logo" />
                                    <ReactRouterLink to="/profile" component={ Link}> Ingresar/Registrarse </ReactRouterLink>
                                </li>
                                <li id="nav-item-title">
                                    <h1><ReactRouterLink to="/" component= { Link }> Judo Coronado </ReactRouterLink></h1>
                                </li>
                                <li id="nav-item-options">
                                    <ReactRouterLink to="/about" component= { Link}>Sobre Nosotros</ReactRouterLink>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <Routers />
        </Router>
    );
}

export default Header;