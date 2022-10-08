// modal component

import React from "react";
import useStore from "../store/useStore";

type ModalProps = {
  title: string;
  children: React.ReactNode;
};

const Modal = ({ title, children }: ModalProps) => {
  const { setModal } = useStore();
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center `}
    >
      <div className="bg-white p-5 rounded-md shadow-lg md:w-1/2 mx-5 md:mx-0">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{children}</p>

        <button
          className="bg-blue-400 text-white p-2 rounded-md shadow-lg mt-5"
          onClick={() => setModal(false)}
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default Modal;
