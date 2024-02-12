import React, { useState } from "react";
import Modal from "../Modal/Modal";

const HeroGrid = ({ items }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (item) => {
    setModalTitle(item.title);
    setModalContent(item.modalContent);
    setModalOpen(true);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col justify-between p-2 h-full">
          <div>
            <img src={item.image} alt={item.title} className="w-full mb-2" />
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold mb-2 font-exo-medium text-slate-600">
                {item.title}
              </h2>
            </div>
            <div className="text-center text-sm text-justify font-nunito-sans text-slate-500 pb-4">
              <p>
                {typeof item.text === "string"
                  ? item.text
                  : item.text.props.children}
              </p>
            </div>
          </div>

          <div className="text-center mt-4 pb-8">
            <button
              onClick={() => openModal(item)}
              className="text-lg text-lime-600 hover:text-lime-400 font-semibold"
            >
              Dowiedz się więcej
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <Modal
          title={modalTitle}
          content={modalContent}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HeroGrid;
