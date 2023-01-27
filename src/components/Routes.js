import { Link } from "@aws-amplify/ui-react";
import React from "react";
import '../index.css';

import { Flex, Heading } from '@aws-amplify/ui-react';

import { BrowserRouter as Router, Link as ReactRouterLink, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Profile } from './Profile';

export function Routers(){
    return(
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/about" element={ <About /> } />
        </Routes>
    );
}

export default Routers;