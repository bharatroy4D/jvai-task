import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="shadow-md py-1.5 primary">
      {/* Drawer wrapper */}
      <div className="drawer drawer-end lg:drawer-static">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <div className="flex justify-between w-11/12 mx-auto items-center">
            <a className="text-2xl font-bold text-white">Clin</a>

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
              <ul className="menu menu-horizontal text-[18px] font-semibold gap-6">
                {[
                  { name: "About", path: "/about" },
                  { name: "Our Solutions", path: "/solutions" },
                  { name: "In Action", path: "/action" },
                  { name: "Technology", path: "/technology" },
                  { name: "Benefits", path: "/benefits" },
                  { name: "Case Use", path: "/case" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`relative px-1 hover:text-white transition-colors duration-300 ${
                        isActive(item.path) ? "text-white" : "text-[#93A2B7]"
                      }`}
                    >
                      {item.name}
                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 ${
                          isActive(item.path) ? "scale-x-100" : "group-hover:scale-x-100"
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Drawer (mobile) -- no changes */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[40%] min-h-full bg-base-200 text-base-content">
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
