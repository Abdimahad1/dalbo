// src/components/Home.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaExpand, FaEye, FaMosque, FaTasks, FaMobileAlt, FaChartLine, FaVideo, FaShoppingCart, FaPodcast, FaGamepad, FaGraduationCap, FaLaptopCode, FaPenFancy, FaPaintBrush, FaMicrophone, FaTimes } from 'react-icons/fa';
import Modal from './Modal';
import Footer from './Footer';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import islamicImage1 from '../assets/images/islamic app 1.png';
import islamicImage2 from '../assets/images/islamic app 2.png';
import islamicImage3 from '../assets/images/islamic app 3.png';
import islamicImage4 from '../assets/images/islamic app 4.png';
import web1 from '../assets/images/web app 1.PNG';
import web2 from '../assets/images/web app 3.PNG';
import web3 from '../assets/images/web app 4.PNG';
import web4 from '../assets/images/web app 5.PNG';
import web5 from '../assets/images/web app 6.PNG';
import web6 from '../assets/images/web app 7.PNG';
import web7 from '../assets/images/web app 2.PNG';
import mob1 from '../assets/images/mobile app 1.png';
import mob2 from '../assets/images/mobile app 2.png';
import mob3 from '../assets/images/mobile app 3.png';
import mob4 from '../assets/images/mobile app 4.png';
import mob5 from '../assets/images/mobile app 5.png';
import Streaming1 from '../assets/images/streaming app 1.png';
import Streaming2 from '../assets/images/streaming app 2.png';
import Streaming3 from '../assets/images/streaming app 3.png';
import Streaming4 from '../assets/images/streaming app 4.png';
import Streaming5 from '../assets/images/streaming app 5.jpg';
import elearning1 from '../assets/images/online course 1.png';
import elearning2 from '../assets/images/online course 2.png';
import elearning3 from '../assets/images/online course 3.png';
import elearning4 from '../assets/images/online course 4.png';
import elearning5 from '../assets/images/online course 5.png';
import podcast1 from '../assets/images/podcast1.png';
import podcast2 from '../assets/images/podcast 2.png';
import podcast3 from '../assets/images/podcast 3.png';
import podcast4 from '../assets/images/podcast 4.jpg';
import gamin1 from '../assets/images/gaming apps 1.png';
import gamin2 from '../assets/images/gaming apps 2.png';
import gamin3 from '../assets/images/gaming apps 3.png';
import gamin4 from '../assets/images/gaming apps 4.png';
import ecommerce1 from '../assets/images/E commerce 1.png';
import ecommerce2 from '../assets/images/E commerce 2.jpg';
import ecommerce3 from '../assets/images/E commerce 3.png';
import ecommerce4 from '../assets/images/E commerce 4.jpg';

const Home = ({ toggleSidebar, isSidebarVisible }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const handleOpenModal = (name) => {
    setProjectName(name);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenImageModal = (images) => {
    setCurrentImages(images);
    setImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setImageModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const projects = [
    {
      title: 'Gaming Platforms',
      icon: <FaGamepad className="text-4xl mb-2 text-white" />,
      images: [gamin1, gamin2, gamin3, gamin4],
      color: 'bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600',
    },
    {
      title: 'E-Learning Platforms',
      icon: <FaGraduationCap className="text-4xl mb-2 text-white" />,
      images: [elearning1, elearning2, elearning3, elearning4, elearning5],
      color: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600',
    },
    {
      title: 'E-commerce platforms',
      icon: <FaShoppingCart className="text-4xl mb-2 text-white" />,
      images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
      color: 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600',
    },
    {
      title: 'Streaming Apps',
      icon: <FaVideo className="text-4xl mb-2 text-white" />,
      images: [Streaming1, Streaming2, Streaming3, Streaming4, Streaming5],
      color: 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600',
    },
    {
      title: 'Islamic Apps',
      icon: <FaMosque className="text-4xl mb-2 text-white" />,
      images: [islamicImage1, islamicImage2, islamicImage3, islamicImage4],
      color: 'bg-gradient-to-r from-green-400 via-green-500 to-green-600',
    },
    {
      title: 'Project Management System',
      icon: <FaTasks className="text-4xl mb-2 text-white" />,
      images: [web1, web2, web3, web7],
      color: 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600',
    },
    {
      title: 'Mobile Apps',
      icon: <FaMobileAlt className="text-4xl mb-2 text-white" />,
      images: [mob1, mob2, mob3, mob4, mob5],
      color: 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600',
    },
    {
      title: 'Management Web Apps',
      icon: <FaChartLine className="text-4xl mb-2 text-white" />,
      images: [web4, web5, web6],
      color: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600',
    },
    {
      title: 'Podcast Platforms',
      icon: <FaPodcast className="text-4xl mb-2 text-white" />,
      images: [podcast1, podcast2, podcast3, podcast4],
      color: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600',
    },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      {!isSidebarVisible && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-white focus:outline-none click-me"
          >
            <FaExpand />
          </button>
        </div>
      )}
      <div className={`absolute inset-0 z-40 ${isModalOpen || imageModalOpen ? 'blur-lg' : ''}`}>
        <div className="m-0 p-0">
          <div className="mb-6">
            <Slider {...settings}>
              <div className="relative h-80">
                <img src={image1} alt="Slide 1" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-80">
                <img src={image2} alt="Slide 2" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-80">
                <img src={image3} alt="Slide 3" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-80">
                <img src={image1} alt="Slide 4" className="w-full h-full object-cover" />
              </div>
            </Slider>
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Hadda Dalbo Oo Hadda Hel</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-lg shadow-md text-white" onClick={() => handleOpenModal('Website Building / Web App')}>
              <FaLaptopCode className="text-4xl mb-2 text-green-200" />
              <span>Website Building / Web App</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-lg shadow-md text-white" onClick={() => handleOpenModal('Android Apps / iOS')}>
              <FaMobileAlt className="text-4xl mb-2 text-purple-200" />
              <span>Android Apps / iOS</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-lg shadow-md text-white" onClick={() => handleOpenModal('Posters / Cards')}>
              <FaPenFancy className="text-4xl mb-2 text-pink-200" />
              <span>Posters / Cards</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg shadow-md text-white" onClick={() => handleOpenModal('Graphic Design')}>
              <FaPaintBrush className="text-4xl mb-2 text-yellow-200" />
              <span>Graphic Design</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-md text-white" onClick={() => handleOpenModal('Video Editing')}>
              <FaVideo className="text-4xl mb-2 text-blue-200" />
              <span>Video Editing</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-lg shadow-md text-white" onClick={() => handleOpenModal('Voice Over')}>
              <FaMicrophone className="text-4xl mb-2 text-red-200" />
              <span>Voice Over</span>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Have a look at what we did <FaEye className="inline-block ml-2 blink" />
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center p-4 rounded-lg shadow-md text-white ${project.color}`}
                  onClick={() => handleOpenImageModal(project.images)}
                >
                  {project.icon}
                  <span>{project.title}</span>
                </div>
              ))}
            </div>
            <div className="h-32 bg-white"></div> {/* White box spacer */}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} projectName={projectName} />
      {imageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={handleCloseImageModal}
              className="absolute top-2 right-2 text-2xl text-red-500"
            >
              <FaTimes />
            </button>
            <Slider {...settings}>
              {currentImages.map((image, idx) => (
                <div key={idx} className="relative h-80">
                  <img src={image} alt={`Project image ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <Footer isSidebarVisible={isSidebarVisible} isModalOpen={isModalOpen} imageModalOpen={imageModalOpen} />
    </div>
  );
};

export default Home;
