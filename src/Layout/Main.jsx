import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Pages/About/About';
import OurSolutions from '../Pages/OurSolutions/OurSolutions';
import Technology from '../Pages/Tecnology/Tecnology';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <OurSolutions />
            <Technology />
        </div>
    );
};

export default Main;