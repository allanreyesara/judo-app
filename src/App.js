import './App.css';
import Header from '../src/components/Header';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



function App({ signOut, user }) {
  console.log(user);
  return (
    <html>
        <header>
          <Header></Header>
        </header>
      <body>
        
      </body>
    </html>

  
    

  );
}

export default withAuthenticator(App);
