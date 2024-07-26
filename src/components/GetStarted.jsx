// src/components/GetStarted.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/backgroundImage.jpg'; // Make sure to import your image

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-6 bg-aqua-transparent text-white rounded-lg flex flex-col items-center justify-center text-center max-w-lg mx-4">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Get Started with Our Project Ordering System</h2>
        <p className="text-lg mb-6 md:text-xl">Experience seamless project management and order tracking.</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full">
          <button
            onClick={() => navigate('/signin')}
            className="bg-blue-600 text-white p-2 rounded-lg w-full md:w-auto"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-white text-blue-600 p-2 rounded-lg border border-blue-600 w-full md:w-auto"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
