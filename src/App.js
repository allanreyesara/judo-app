import './App.css';
import React, { Component } from 'react';
import  Header from '../src/components/Header';

import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
      <div className='App'>
        <div className='Header'>
          <header>
            <Header />
          </header>
        </div>
        <div className='body'>
        </div>
      </div>
  );
}

export default App;
