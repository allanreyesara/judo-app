import React, { useState } from "react";
import './building.css';

import { withAuthenticator, Link } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Profile({ signOut }) {
  return(
    <div className='App'>
      <div className='body'>
        <body>
          <img src='https://www.linkpicture.com/q/judoCoroBuilding.jpg' className="judoCoro"/>
          <h1> Esta página web se encuentra en construcción, ¡te esperamos pronto!</h1>
          <button onClick={signOut}>Sign Out</button>
        </body>
      </div>
    </div> 
  )
}

export default withAuthenticator(Profile, {includeGreetings: true});