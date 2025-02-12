import React, { useState } from "react";

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-20">

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={closeModal}
        >

          <div
            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 transform transition-transform duration-300 ease-in-out scale-100"
            onClick={(e) => e.stopPropagation()} 
          >

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Modal Title</h2>
              <button
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 text-gray-600">
              <p>
                This is a placeholder text inside the modal. You can replace
                this with your desired content.
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
