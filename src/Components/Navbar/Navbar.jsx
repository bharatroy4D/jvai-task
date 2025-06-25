import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow-md py-4 primary z-50">
      <div className="drawer drawer-end lg:drawer-static">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Navbar Content */}
        <div className="drawer-content">
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
              <ul className="flex items-center gap-6 text-[18px] font-semibold">
                <li><a href="#About" className="text-[#93A2B7] hover:text-white transition">About</a></li>
                <li><a href="#Solutions" className="text-[#93A2B7] hover:text-white transition">Our Solutions</a></li>
                <li><a href="#Action" className="text-[#93A2B7] hover:text-white transition">In Action</a></li>
                <li><a href="#Technology" className="text-[#93A2B7] hover:text-white transition">Technology</a></li>
                <li><a href="#Benefits" className="text-[#93A2B7] hover:text-white transition">Benefits</a></li>
                <li><a href="#Case" className="text-[#93A2B7] hover:text-white transition">Case Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Drawer content (mobile menu) */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[40%] min-h-full bg-base-200 text-base-content">
            <li><a href="#About">About</a></li>
            <li><a href="#Solutions">Our Solutions</a></li>
            <li><a href="#Action">In Action</a></li>
            <li><a href="#Technology">Technology</a></li>
            <li><a href="#Benefits">Benefits</a></li>
            <li><a href="#Case">Case Use</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
