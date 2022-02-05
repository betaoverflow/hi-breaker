import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="drop-shadow-lg w-72 h-32 md:w-96 md:h-52 bg-white flex flex-col mx-auto justify-center rounded-xl text-center">
      {children}
    </div>
  );
};

export default Card;
