// components/Sidebar.js
import React, { useState } from 'react';
import { Plus, Moon, Sun, Zap, Users, HelpCircle, MessageCircle, LogOut, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      id: 1,
      label: 'New Chat',
      icon: Plus,
      type: 'button',
      path: '/dashboard/realChat',
      className: 'bg-blue-600 hover:bg-blue-700 text-white font-medium'
    },
    {
      id: 2,
      label: 'Dark Mode',
      icon: isDarkMode ? Moon : Sun,
      type: 'toggle',
      path: '/dashboard/mode',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 3,
      label: 'Manage Subscription',
      icon: Zap,
      type: 'link',
      path: '/dashboard/manage',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 4,
      label: 'Users',
      icon: Users,
      type: 'link',
      path: '/dashboard/users',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 5,
      label: 'Help & Support',
      icon: HelpCircle,
      type: 'link',
      path: '/dashboard/helpSupport',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 6,
      label: 'FAQ',
      icon: MessageCircle,
      type: 'link',
      path: '/dashboard/faq',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    }
  ];

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement actual dark mode toggle logic here
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="w-72 h-screen bg-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white font-medium">Technologies</h1>
          </div>
          <div className="ml-auto">
            <span className="text-white text-lg font-semibold">K</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;

          if (item.type === 'toggle') {
            return (
              <div
                key={item.id}
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors ${isActive ? 'bg-gray-700' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">{item.label}</span>
                </div>
                <button
                  onClick={handleToggleDarkMode}
                  className="relative w-12 h-6 bg-blue-600 rounded-full cursor-pointer transition-colors"
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`}>
                    {isDarkMode ? (
                      <Moon className="w-3 h-3 text-gray-800 m-1" />
                    ) : (
                      <Sun className="w-3 h-3 text-yellow-500 m-1" />
                    )}
                  </div>
                </button>
              </div>
            );
          }

          return (
            <Link
              to={item.path}
              key={item.id}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                item.className
              } ${isActive ? 'bg-gray-700' : ''}`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-700">
        <button className="w-full flex items-center space-x-3 p-3 text-red-400 hover:text-red-300 hover:bg-gray-700 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;