import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase'; // Import Firestore
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore methods
import backgroundImage from '../assets/images/backgroundImage3.jpg'; // Make sure to import your image

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState(''); // State to manage phone number validation error
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Phone number validation
    if (phone.length < 9) {
      setPhoneError('Phone number must be 9 digits or more');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      
      // Save additional user info in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name,
        email,
        phone,
      });

      toast.success('Account created successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/signin');
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-md w-full bg-aqua-transparent p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Get On Board!</h2>
          <p className="text-black-200">Create your profile to start your journey.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div className="relative">
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full p-4 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Full Name" 
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-4 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="E-Mail" 
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="text" 
              value={phone} 
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError(''); // Clear error when user starts typing
              }} 
              className={`w-full p-4 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${phoneError ? 'border-red-500' : ''}`} 
              placeholder="Phone No" 
              required 
            />
            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
          </div>
          <div className="relative">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-4 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Password" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold shadow-lg"
          >
            SIGNUP
          </button>
          <p className="text-center mt-2 text-black-200">
            Already have an account? <a href="/signin" className="text-green-500">LOGIN</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
