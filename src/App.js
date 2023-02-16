import './App.css';
import React from 'react';
import  Header from '../src/components/Header';

import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import Home from './components/Home';

Amplify.configure(awsconfig);


function App() {
  return (
      <div className='App'>
        <Header />
      </div>
  );
}

export default App;
