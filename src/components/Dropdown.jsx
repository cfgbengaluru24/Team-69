import React, { useState } from 'react';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="focus:outline-none"
        onClick={handleToggle}
      > Dropdown
       
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Admin Profile</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
