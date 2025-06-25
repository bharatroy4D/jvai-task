import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="shadow-md py-2 primary">
      {/* Drawer wrapper */}
      <div className="drawer drawer-end lg:drawer-static">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <div className="flex justify-between w-11/12 mx-auto items-center">
            <a className="text-2xl font-bold text-primary">Clin</a>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal text-base font-medium gap-4 ">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/solutions">Our Solutions</Link></li>
                <li><Link to="/action">In Action</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/benefits">Benefits</Link></li>
                <li><Link to="/case">Case Use</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Drawer content (right side panel) */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu  p-4 w-[40%] min-h-full bg-base-200 text-base-content">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/solutions">Our Solutions</Link></li>
            <li><Link to="/action">In Action</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/case">Case Use</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
