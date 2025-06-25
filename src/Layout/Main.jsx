import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Outlet />
        </div>
    );
};

export default Main;