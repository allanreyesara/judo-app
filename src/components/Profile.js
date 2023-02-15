import React from "react";
import './building.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

//import awsExports from '../aws-exports';
//Amplify.configure(awsExports);

function Profile({ signOut, user }) {

  console.log(user);
  return(
    <div className='App'>
    <div className='header'>
    <header>
    </header>
    </div>
    <div className='body'>
      <>
      <h1>Hola {user.attributes.name}</h1>
      <button onClick={signOut}>Salir</button>
      </>
        <img src='https://www.linkpicture.com/q/judoCoroBuilding.jpg' className="judoCoro"/>
        <h1> Esta página web se encuentra en construcción, ¡te esperamos pronto!</h1>
    </div>
    
  </div>
  )
}

export default withAuthenticator(Profile, {includeGreetings: true});