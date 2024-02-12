import React from "react";

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-start md:items-center overflow-y-auto overflow-x-hidden p-4 md:p-0">
      <div className="relative mx-auto w-full max-w-2xl h-full md:h-auto mt-20 md:mt-0">
        <div className="relative rounded-lg shadow bg-gray-100">
          <div className="flex justify-between items-center p-5 rounded-t border-b">
            <h3 className="text-xl font-exo-medium text-lime-600">{title}</h3>
            <button
              type="button"
              className="text-lime-600 bg-transparent hover:bg-lime-300 hover:text-lime-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>

          <div className="p-6 space-y-6 text-slate-700 font-nunito-sans">
            {content}
          </div>

          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-300">
            <button
              type="button"
              className="py-2 px-4 rounded text-lg text-lime-600 hover:text-lime-400 transition duration-150 w-full"
              onClick={onClose}
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
