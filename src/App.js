import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App({ signOut, user }) {
  console.log(user);
  return (
    <>
      <h1>Hello {user.attributes.name}</h1>
      <button onClick={signOut}>Sign out</button>
      <h1>Judo Coronado esta en cosntruccion</h1>
    </>
  );
}

export default withAuthenticator(App);
