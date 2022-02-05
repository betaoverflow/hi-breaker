import React from "react";

const Card = () => {
  return (
    <div className="drop-shadow-lg w-72 h-32 md:w-96 md:h-40 bg-white flex flex-col mx-auto justify-center rounded-xl text-center">
      <h1 className="font-bold text-md md:text-xl">
        Did I do something wrong?
      </h1>
      <p className="text-xl md:text-3xl font-bold mt-3 text-red-600">
        Absolutely
      </p>
    </div>
  );
};

export default Card;
