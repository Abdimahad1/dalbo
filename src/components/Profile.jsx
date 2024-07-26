import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLock, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        setName(currentUser.displayName || '');
        setEmail(currentUser.email || '');

        // Fetch additional user info from Firestore
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setPhone(userData.phone || '');
          // Assuming you have a way to securely retrieve and set the user's password
          setPassword(userData.password || ''); // Placeholder for the actual password field
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-0">
      <div className="w-full max-w-md">
        <div className="relative flex items-center justify-between bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-4 rounded-t-lg">
          <button onClick={() => navigate('/home')} className="text-white text-2xl">
            <FaArrowLeft />
          </button>
          <h2 className="text-2xl text-white font-bold">Profile</h2>
          <span className="text-2xl text-white">&nbsp;</span> {/* Placeholder to balance the layout */}
        </div>
        <div className="bg-aqua-transparent p-6 rounded-b-lg shadow-lg">
          <div className="mb-4 flex items-center">
            <input
              type="text"
              value={name}
              readOnly
              className="flex-1 p-2 border rounded bg-gray-200"
              placeholder="Name"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaPhone className="text-purple-500 mr-4" />
            <input
              type="text"
              value={phone}
              readOnly
              className="flex-1 p-2 border rounded bg-gray-200"
              placeholder="Phone"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-purple-500 mr-4" />
            <input
              type="email"
              value={email}
              readOnly
              className="flex-1 p-2 border rounded bg-gray-200"
              placeholder="Email"
            />
          </div>
          <div className="mb-4 flex items-center relative">
            <FaLock className="text-purple-500 mr-4" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              readOnly
              className="flex-1 p-2 border rounded bg-gray-200"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 text-purple-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
