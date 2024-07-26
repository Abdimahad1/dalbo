// src/components/Explore.js
import React, { useState } from 'react';
import { FaLaptopCode, FaMobileAlt, FaPenFancy, FaPaintBrush, FaVideo, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Modal from './Modal';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '../assets/images/web App template.png';
import image2 from '../assets/images/android app ui design.png';
import image3 from '../assets/images/poster 1.png';
import image4 from '../assets/images/graphic design.png';
import image5 from '../assets/images/video editing.png';
import image6 from '../assets/images/voice over.png';

const categories = [
  'Our Choice',
  'Latest',
  'New',
];

const projects = [
  { name: 'Website Building', icon: <FaLaptopCode />, price: '$50', image: image1, latest: true, description: 'We create professional websites and web applications tailored to your needs.' },
  { name: 'Mobile Apps', icon: <FaMobileAlt />, price: '$80', image: image2, latest: true, description: 'Developing top-notch Android and iOS applications for various purposes.' },
  { name: 'Posters / Cards', icon: <FaPenFancy />, price: '$20', image: image3, new: true, description: 'Designing eye-catching posters and cards for all occasions.' },
  { name: 'Graphic Design', icon: <FaPaintBrush />, price: '$30', image: image4, description: 'Offering professional graphic design services to bring your ideas to life.' },
  { name: 'Video Editing', icon: <FaVideo />, price: '$40', image: image5, description: 'High-quality video editing services for promotional and personal projects.' },
  { name: 'Voice Over', icon: <FaMicrophone />, price: '$10', image: image6, new: true, description: 'Professional voice over services for advertisements, videos, and more.' },
];

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Our Choice');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const handleOpenModal = (name) => {
    setProjectName(name);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully sent the message. We will review your requirements and contact you via WhatsApp for further information.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setIsModalOpen(false);
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery) &&
    (selectedCategory === 'Our Choice' ||
      (selectedCategory === 'Latest' && project.latest) ||
      (selectedCategory === 'New' && project.new))
  );

  return (
    <div className="p-6">
      {!selectedProject ? (
        <>
          <div className="mb-6 flex items-center justify-between">
            <button onClick={() => navigate('/home')} className="text-2xl text-yellow-500">
              <FaArrowLeft />
            </button>
            <h1 className="text-3xl font-bold">Explore more</h1>
            <div />
          </div>
          <h2 className="text-2xl font-bold mb-4">Trends</h2>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-2 mt-4 border rounded"
          />
          <div className="flex mt-4 space-x-4 overflow-x-auto hide-scrollbar">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-white ${
                  selectedCategory === category ? 'bg-orange-500' : 'bg-gray-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div key={index} className="mb-4 p-4 bg-aqua-transparent bg-opacity-50 rounded-lg shadow-md flex items-center text-black" onClick={() => handleProjectClick(project)}>
                  <div className="p-4 bg-gray-200 rounded-full text-yellow-600 mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold flex items-center">
                      {project.name}
                      {project.new && <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">New</span>}
                      {project.latest && <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Latest</span>}
                    </h2>
                    <p>{project.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found</p>
            )}
          </div>
        </>
      ) : (
        <div className="p-6">
          <div className="flex items-center justify-between">
            <button onClick={handleBackClick} className="text-2xl text-yellow-500">
              <FaArrowLeft />
            </button>
            <h1 className="text-3xl font-bold">{selectedProject.name}</h1>
            <div />
          </div>
          <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-64 object-cover mt-4" />
          <h2 className="text-2xl font-bold mt-4">{selectedProject.name}</h2>
          <p className="text-xl">{selectedProject.price}</p>
          <p className="mt-4">{selectedProject.description}</p>
         
          <button className="mt-6 w-full bg-orange-500 text-white p-4 rounded-lg" onClick={() => handleOpenModal(selectedProject.name)}>Order Now</button>
          <div className="h-20 bg-white"></div> {/* White box spacer */}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} projectName={projectName} />
      <ToastContainer />
      <div className="h-20 bg-white"></div> {/* White box spacer */}
    </div>
  );
};

export default Explore;
