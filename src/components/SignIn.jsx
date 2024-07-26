import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebase'; // Import Firestore
import { toast } from 'react-toastify';
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Import Firestore methods
import { useAuth } from '../contexts/AuthContext';
import googleLogo from '../assets/images/google-logo.png';
import backgroundImage from '../assets/images/backgroundImage2.jpg'; // Make sure to import your image

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Fetch additional user info from Firestore
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      const userData = userDoc.data();
      
      // Update current user context
      setCurrentUser({ ...userCredential.user, ...userData });

      toast.success(`${userCredential.user.displayName || userData.name}, you are successfully logged in`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/home');
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

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Fetch or create user info in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber || '',
        });
      }

      setCurrentUser(user);

      toast.success(`${user.displayName}, you are successfully logged in`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/home');
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
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-black-200">Make it work, make it right, make it fast.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSignIn}>
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
            LOGIN
          </button>
          <div className="text-center">OR</div>
          <button 
            type="button" 
            onClick={handleGoogleSignIn} 
            className="w-full bg-white border p-4 rounded-xl flex items-center justify-center shadow-lg"
          >
            <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
            Sign in with Google
          </button>
          <p className="text-center mt-2 text-black-200">
            Don't have an account? <a href="/signup" className="text-blue-500">Signup</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
