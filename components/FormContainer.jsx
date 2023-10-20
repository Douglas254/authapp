import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className="grid place-content-center h-screen">
      <div className="relative shadow-lg px-5 py-8 bg-white border-[1px] border-gray-200 rounded-lg">
        <div className="grid place-items-center absolute top-0 left-0">
          <div className="w-8 h-8 rounded-br-full shadow-md shadow-zinc-400 bg-primary"></div>
        </div>
        <div className="grid place-items-center absolute right-0 top-0">
          <div className="w-8 h-8 rounded-bl-full shadow-md shadow-zinc-400 bg-primary"></div>
        </div>
        <div className="grid place-items-center absolute bottom-0 left-0">
          <div className="w-8 h-8 rounded-tr-full shadow-md shadow-zinc-400 bg-primary"></div>
        </div>
        <div className="grid place-items-center absolute bottom-0 right-0">
          <div className="w-8 h-8 rounded-tl-full shadow-md shadow-zinc-400 bg-primary"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
