import React from "react";

const Modal = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <div className="mb-4">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
        <button
          onClick={onClose}
          className="py-2 px-4 bg-lime-600 text-white rounded hover:bg-lime-700 transition duration-150"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default Modal;
