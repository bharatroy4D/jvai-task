import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Pages/About/About';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <About />
        </div>
    );
};

export default Main;