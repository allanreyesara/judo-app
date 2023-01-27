import './App.css';
import React, { Component } from 'react';
import  Header from '../src/components/Header';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



function App({ signOut, user }) {
  console.log(user);
  return (
    <div className='App'>
      <div className='Header'>
        <header>
          <Header></Header>
        </header>
      </div>
      <div className='body'>
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
