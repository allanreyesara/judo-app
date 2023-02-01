import React from "react";
import './building.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export function Profile() {
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
    )
}

export default withAuthenticator(Profile);