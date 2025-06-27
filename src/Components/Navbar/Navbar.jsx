import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/features/auth/authSlice';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeHash, setActiveHash] = useState(location.hash || '#About');

  const auth = useSelector((state) => state.auth);
  const rawToken = auth?.token;
  const token = rawToken ? rawToken.replace(/^"|"$/g, '') : null;

  // Update activeHash when location changes
  useEffect(() => {
    setActiveHash(location.hash || '#About');
  }, [location.hash]);

  // Add scroll listener to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#About', '#Solutions', '#Action', '#Technology', '#Benefits', '#Case'];
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHash(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/signIn');
  };

  const isActive = (hash) => activeHash === hash;

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveHash(id); // Update active hash immediately
      window.history.pushState(null, null, id);
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

        <div className="drawer-content">
          <div className="flex justify-between w-11/12 mx-auto items-center">
            {/* Logo */}
            <div className='flex items-center space-x-2'>
              <svg 
                className="w-10 h-10"
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40
                        C80 50, 70 60, 60 65 C70 70, 80 80, 80 90
                        C80 105, 60 115, 50 115 C40 115, 20 105, 20 90
                        C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z" 
                      fill="none" stroke="#60a5fa" strokeWidth="2"/>
                
                <path d="M35 40 H65 M50 40 V80
                        M35 60 H65 M25 50 H75" 
                      stroke="#93c5fd" strokeWidth="1.5" fill="none"/>
                
                <circle cx="35" cy="50" r="2" fill="#93c5fd"/>
                <circle cx="65" cy="80" r="2" fill="#93c5fd"/>
              </svg>
              <a className="text-2xl font-bold text-white">Clin</a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <label htmlFor="my-drawer" className="btn btn-ghost drawer-button text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-6 text-[18px] font-semibold">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative group transition duration-300 ${
                        isActive(item.id) 
                          ? 'text-white' 
                          : 'text-[#93A2B7] hover:text-white'
                      }`}
                    >
                      {item.name}
                      <span 
                        className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                          isActive(item.id) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Logout shown only when token exists */}
              {token && (
                <button
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[60%] min-h-full bg-base-200 text-base-content">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => {
                    scrollToSection(item.id);
                    // Close mobile menu
                    document.getElementById('my-drawer').checked = false;
                  }}
                  className={isActive(item.id) ? 'text-blue-600 font-bold' : ''}
                >
                  {item.name}
                </button>
              </li>
            ))}

            {token && (
              <li>
                <button onClick={handleLogout} className="text-red-600 font-semibold">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;