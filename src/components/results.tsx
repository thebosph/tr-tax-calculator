import React from "react";

const Results: React.FC = () => {
  return (
    <div className="flex flex-col items-center  space-y-10 w-full ">
      <h1 className="text-4xl font-bold">
        Kira Gelirinden Kaynaklanan Gelir Vergisi Hesaplama
      </h1>
      <div className="flex justify-between space-x-5 w-full">
        <div className="bg-blue-400 shadow-md p-2 w-1/3 rounded-md flex flex-col space-y-3 ">
          <p className="text-2xl text-white"> Matrah:</p>
          <span className="text-3xl text-white">100000 TL</span>
        </div>
        <div className="bg-red-500 shadow-md p-2 w-1/3 rounded-md flex flex-col space-y-3">
          <p className="text-2xl text-white">Hesaplanan Vergi:</p>
          <span className="text-3xl text-white">20000 TL</span>
        </div>
        <div className="bg-yellow-600  shadow-md p-2 w-1/3 rounded-md flex flex-col space-y-3">
          <p className="text-2xl text-white"> Vergi/Gelir Oranı:</p>
          <span className="text-3xl text-white">%30</span>
        </div>
      </div>
    </div>
  );
};

export default Results;
