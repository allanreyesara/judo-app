import React from "react";
import '../index.css';


export function Header() {
    return(
        <div className="header">
            <nav>
                <ul>
                    
                    <li id="nav-item"><a><img src="https://imgtr.ee/images/2023/01/26/GZ2ts.png" alt="Profile Logo"></img>Ingresar/Registrarse</a></li>
                    <li id="nav-item"><a href="#"><h1>Judo Coronado</h1></a></li>
                    <li id="nav-item"><a>Sobre Nosotros</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;