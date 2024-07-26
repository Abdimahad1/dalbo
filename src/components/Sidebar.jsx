import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaUser, FaCompress, FaSignOutAlt, FaPhoneAlt, FaSync } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  useEffect(() => {
    if (isLogoutClicked) {
      toast.dismiss();
    }
  }, [isLogoutClicked]);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleSignOut = () => {
    setIsLogoutClicked(true);
    toast(
      ({ closeToast }) => (
        <div>
          Are you sure you want to sign out?
          <div>
            <button
              onClick={() => {
                logout();
                closeToast();
                toggleSidebar(); // Hide the sidebar
                navigate('/');
              }}
              style={{ marginRight: 10, backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
            >
              Yes
            </button>
            <button 
              onClick={closeToast} 
              style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        hideProgressBar: true,
      }
    );
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      toggleSidebar();
    }
  };

  const handleRefresh = () => {
    navigate(0); // Refresh the page
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop"
          onClick={handleOutsideClick}
        ></div>
      )}
      <div
        className={`fixed flex flex-col h-screen p-3 text-white bg-aqua-transparent border-4 border-white rounded-lg ${
          isVisible ? 'left-0 z-50' : '-left-full'
        } transition-all duration-300 w-64 md:w-1/2 lg:w-1/3 xl:w-1/4`}
      >
        <div className="flex items-center justify-between">
          <button onClick={handleSignOut} className="text-2xl focus:outline-none">
            <FaSignOutAlt className="text-white" />
          </button>
          <button onClick={handleRefresh} className="text-2xl focus:outline-none">
            <FaSync />
          </button>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            <FaCompress />
          </button>
        </div>
        <div className="flex flex-col items-center my-4">
          <FaUser className="text-4xl text-white" />
          {currentUser && <span className="text-lg mt-2">{currentUser.displayName}</span>}
        </div>
        <nav className="flex-1 mt-4 space-y-4 overflow-y-auto">
          <NavLink to="/home" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600" onClick={toggleSidebar}>
            <FaHome className="text-xl custom-icon" />
            <span className="text-lg">Home</span>
          </NavLink>
          <div className="border-t border-gray-500 mx-2 my-2"></div>
          <NavLink to="/explore" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600" onClick={toggleSidebar}>
            <FaSearch className="text-xl custom-icon" />
            <span className="text-lg">Explore</span>
          </NavLink>
          <div className="border-t border-gray-500 mx-2 my-2"></div>
          <NavLink to="/profile" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600" onClick={toggleSidebar}>
            <FaUser className="text-xl custom-icon" />
            <span className="text-lg">Profile</span>
          </NavLink>
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600 cursor-pointer" onClick={handleContactClick}>
            <FaPhoneAlt className="text-xl custom-icon" />
            <span className="text-lg">Contact Us</span>
          </div>
          <div className="border-t border-gray-500 mx-2 my-2"></div>
        </nav>
      </div>
      <Modal
        isOpen={isContactModalOpen}
        onRequestClose={handleCloseContactModal}
        appElement={document.getElementById('root')}
        className="absolute left-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          <div className="flex flex-col space-y-4">
            <a href="https://wa.me/+252613797852" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500" />
            </a>
            <a href="tel:+252613797852">
              <FontAwesomeIcon icon={faPhone} size="2x" className="text-blue-500" />
            </a>
            <a href="https://www.facebook.com/ajaib.hussein?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-700" />
            </a>
            <a href="mailto:mucjisoduusho123@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-red-500" />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
