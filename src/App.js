import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LoadingScreen from './components/LoadingScreen';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const AppContent = () => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    const noFooterPaths = ['/', '/signin', '/signup'];

    return (
      <>
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 overflow-auto ${isSidebarVisible ? 'blur-lg' : ''} m-0 p-0`}>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/home"
              element={isAuthenticated ? <Home toggleSidebar={toggleSidebar} setIsModalOpen={setIsModalOpen} setImageModalOpen={setImageModalOpen} /> : <Navigate to="/" />}
            />
            <Route path="/explore" element={isAuthenticated ? <Explore /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/"} />} />
          </Routes>
        </div>
        {!noFooterPaths.includes(location.pathname) && isAuthenticated && (
          <Footer
            isSidebarVisible={isSidebarVisible}
            isModalOpen={isModalOpen}
            imageModalOpen={imageModalOpen}
          />
        )}
      </>
    );
  };

  if (loading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="flex flex-col h-screen m-0 p-0">
      <AuthProvider>
        <Router>
          <AppContent />
          <ToastContainer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
