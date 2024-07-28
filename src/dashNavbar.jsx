import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">App Name</div>
      <div className="flex items-center space-x-4">
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Dashboard</a>
          <a href="#" className="hover:text-gray-300">Projects</a>
          <a href="#" className="hover:text-gray-300">Team</a>
        </nav>
        <div className="relative">
          <FaBell className="text-2xl cursor-pointer hover:text-gray-300" />
        </div>
        <div className="relative">
          <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-300" />
          {/* Dropdown menu placeholder */}
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg hidden">
            <div className="p-2">John Doe</div>
            <div className="p-2 border-t border-gray-200">
              <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2">Profile</a>
              <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2">Settings</a>
              <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
