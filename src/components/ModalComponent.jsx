import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onClose, content }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        {content}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
