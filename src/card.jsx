import React from 'react';

const Card = ({ title, number, link }) => {
  return (
    <a href={link} className=" bg-blue-500 text-white rounded-lg p-4 shadow hover:bg-blue-600 transition duration-200 flex items-center justify-center h-48">
      <div className="text-center">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-lg mt-2">{number}</div>
      </div>
    </a>
  );
};

export default Card;
