import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div 
        ref={modalRef}
        className="bg-zinc-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto custom-scrollbar"
      >
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="text-gray-300">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;