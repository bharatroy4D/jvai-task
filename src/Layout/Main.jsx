import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Pages/About/About';
import OurSolutions from '../Pages/OurSolutions/OurSolutions';
import Technology from '../Pages/Tecnology/Tecnology';
import Benefits from '../Pages/Benefits/Benefits';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <OurSolutions />
            <Technology />
            <Benefits />
        </div>
    );
};

export default Main;