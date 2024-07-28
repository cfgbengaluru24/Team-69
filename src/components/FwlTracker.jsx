import React, { useState } from 'react';
import fwlData from './data'; 

const FwlTracker = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <div 
        className="cursor-pointer p-4 bg-navy-700 text-white rounded-lg mb-4" 
        onClick={toggleList}
      >
        <h2 className="text-2xl font-bold">FWL Tracker (Tap to see details)</h2>
      </div>
      {showList && (
        <ul className="mt-4 space-y-4">
          {fwlData.map(fwl => (
            <li 
              key={fwl.id} 
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-blue-700">{fwl.name}</h3>
              <p className="text-gray-700">Age: {fwl.age}</p>
              <p className="text-gray-700">Location: {fwl.location}</p>
              <p className="text-gray-700">Division: {fwl.division}</p>
              <p className="text-gray-700">Pincode: {fwl.pincode}</p>
              <p className="text-gray-700">Language: {fwl.language}</p>
              <p className="text-gray-700">Education: {fwl.education}</p>
              <p className="text-gray-700">Years of Experience: {fwl.yearsOfExperience}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FwlTracker;
