import React from 'react';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = ({ isSidebarVisible, isModalOpen, imageModalOpen }) => {
  const location = useLocation();
  
  // If any modal is open, don't render the footer
  if (isModalOpen || imageModalOpen) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 shadow-lg flex justify-around items-center p-2 bg-aqua-transparent border-4 border-white rounded-t-xl z-50 transition-all duration-300 ${isSidebarVisible ? 'blur-lg' : ''}`}>
      <NavLink to="/explore" className={`flex flex-col items-center ${location.pathname === '/explore' ? 'active' : ''}`}>
        <div className={`relative p-2 rounded-full shadow-lg ${location.pathname === '/explore' ? 'bg-orange-500 text-white -mt-4' : ''}`}>
          <FaSearch className="text-xl" />
        </div>
        {location.pathname === '/explore' && <span className="text-xs mt-1">EXPLORE</span>}
      </NavLink>
      <NavLink to="/home" className={`flex flex-col items-center ${location.pathname === '/home' ? 'active' : ''}`}>
        <div className={`relative p-2 rounded-full shadow-lg ${location.pathname === '/home' ? 'bg-orange-500 text-white -mt-4' : ''}`}>
          <FaHome className="text-xl" />
        </div>
        {location.pathname === '/home' && <span className="text-xs mt-1">HOME</span>}
      </NavLink>
      <NavLink to="/profile" className={`flex flex-col items-center ${location.pathname === '/profile' ? 'active' : ''}`}>
        <div className={`relative p-2 rounded-full shadow-lg ${location.pathname === '/profile' ? 'bg-orange-500 text-white -mt-4' : ''}`}>
          <FaUser className="text-xl" />
        </div>
        {location.pathname === '/profile' && <span className="text-xs mt-1">PROFILE</span>}
      </NavLink>
    </div>
  );
};

export default Footer;
