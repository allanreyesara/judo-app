import React from "react";
import '../index.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export function Profile() {
    return(
        <p>Hola</p>
    )
}

export default withAuthenticator(Profile);