import React from "react";
import '../App.css';
import NewsFeed from "./News";

export function Home(){
    return(
      <div className='App'>
        <div className="headerHome">
          <img src="https://raw.githubusercontent.com/allanreyesara/judo-app/main/media/CoronadoIglesia.jpg" className="homeHeader"/>
        </div>
        <div className="body">
          <div className="calendario">
            <h1>Calendario</h1>
          </div>
          <div className="noticias">
            <h1>Noticias</h1>
            <NewsFeed />
          </div>
          <div className="lecheros">
            <h1>Los Lecheros</h1>
          </div>
        </div>
      </div>
    );
}

export default Home;