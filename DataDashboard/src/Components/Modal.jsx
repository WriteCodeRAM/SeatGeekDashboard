import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
