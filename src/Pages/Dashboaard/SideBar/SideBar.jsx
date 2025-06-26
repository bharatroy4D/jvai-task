import React, { useState } from 'react';
import { 
  Plus, 
  Moon, 
  Sun, 
  Zap, 
  Users, 
  HelpCircle, 
  MessageCircle, 
  LogOut,
  Brain
} from 'lucide-react';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Menu items data array
  const menuItems = [
    {
      id: 1,
      label: 'New Chat',
      icon: Plus,
      type: 'button',
      className: 'bg-blue-600 hover:bg-blue-700 text-white font-medium'
    },
    {
      id: 2,
      label: 'Dark',
      icon: isDarkMode ? Moon : Sun,
      type: 'toggle',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 3,
      label: 'Manage Subscrip...',
      icon: Zap,
      type: 'link',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 4,
      label: 'Users',
      icon: Users,
      type: 'link',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 5,
      label: 'Help And Support',
      icon: HelpCircle,
      type: 'link',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    {
      id: 6,
      label: 'FAQ',
      icon: MessageCircle,
      type: 'link',
      className: 'text-gray-300 hover:text-white hover:bg-gray-700'
    }
  ];

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMenuClick = (item) => {
    if (item.type === 'toggle' && item.label === 'Dark') {
      handleToggleDarkMode();
    } else {
      console.log(`Clicked: ${item.label}`);
    }
  };

  return (
    <div className="w-72 h-screen bg-gray-800 flex flex-col">
      {/* Header */}
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

      {/* Menu Items */}
      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          
          return (
            <div key={item.id}>
              {item.type === 'toggle' && item.label === 'Dark' ? (
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-gray-300" />
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                  <div 
                    className="relative w-12 h-6 bg-blue-600 rounded-full cursor-pointer transition-colors"
                    onClick={handleToggleDarkMode}
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
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${item.className}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Logout */}
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