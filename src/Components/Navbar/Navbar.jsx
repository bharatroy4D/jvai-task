import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (hash) => location.hash === hash;

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, id); // update URL hash
    }
  };

  const menuItems = [
    { name: 'About', id: '#About' },
    { name: 'Our Solutions', id: '#Solutions' },
    { name: 'In Action', id: '#Action' },
    { name: 'Technology', id: '#Technology' },
    { name: 'Benefits', id: '#Benefits' },
    { name: 'Case Use', id: '#Case' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full shadow-md py-4 bg-[#0F172A] z-50">
      <div className="drawer drawer-end lg:drawer-static">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Navbar Content */}
        <div className="drawer-content">
          <div className="flex justify-between w-11/12 mx-auto items-center">
            <a className="text-2xl font-bold text-white">Clin</a>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex">
              <ul className="flex items-center gap-6 text-[18px] font-semibold">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative group transition text-[#93A2B7] hover:text-white ${
                        isActive(item.id) ? 'text-white' : ''
                      }`}
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Drawer content (mobile menu) */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[60%] min-h-full bg-base-200 text-base-content">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)}>{item.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
