import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="drop-shadow-lg p-5 w-full h-full bg-white flex flex-col mx-auto justify-center rounded-xl text-center">
      {children}
    </div>
  );
};

export default Card;
