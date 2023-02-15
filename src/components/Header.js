
import React from "react";
import '../index.css';


import { BrowserRouter as Router, Link as ReactRouterLink } from 'react-router-dom';

import { Routers } from './Routes';

import { Link } from "@aws-amplify/ui-react";


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    render(){
        return(
            <Router>
                <div className="header">
                    <nav className="navbar">
                        
                        <a href="#navigation-menu" className="hamburger" >&#9776;</a>

                        <ul id="navigation-menu" className="navigation-menu">
                        
                            <li className="nav-item">
                                <img src="https://raw.githubusercontent.com/allanreyesara/judo-app/main/media/loginLogo.png" alt="Profile Logo" />
                                <ReactRouterLink to="/profile" component={ Link }> Ingresar/Registrarse </ReactRouterLink>
                            </li>
                            <li className="nav-item-title">
                                <h1><ReactRouterLink to="/" component= { Link }> Judo Coronado </ReactRouterLink></h1>
                            </li>
                            <li className="nav-item">
                                <ReactRouterLink to="/about" component= { Link }>Sobre Nosotros</ReactRouterLink>
                            </li>
                            <a className="close" href="#">
                                <img src="https://ljc-dev.github.io/testing0/ham-close.svg" alt="close" />
                            </a>
                        
                        </ul>
                    </nav>
                </div>
                <Routers />
            </Router>
        )
    };
}

export default Header;