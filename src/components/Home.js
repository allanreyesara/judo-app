import React from "react";
import '../index.css';
import Header from "./Header";

export function Home(){
    return(
      <div className='App'>
        <div className='header'>
          <header>
          </header>
        </div>
        <div className='body'>
          <body>
            <img src='https://www.linkpicture.com/q/judoCoroBuilding.jpg' className="judoCoro"/>
            <h1> Esta página web se encuentra en construcción, ¡te esperamos pronto!</h1>
          </body>
        </div>
      </div>
    );
}

export default Home;