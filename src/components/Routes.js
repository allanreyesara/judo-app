import React, { Component }  from 'react';
import { Header } from './Header';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

export function Routers(){
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

        
    )
}

export default Routers;