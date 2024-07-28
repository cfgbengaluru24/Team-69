import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';

const Sidebar = () => {
  //  const navigate = useNavigate();
  return (
    <div className="bg-blue-800 text-white w-64 h-full flex flex-col">
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">App Name</h1>
      </div>
      <nav className="flex-grow">
        <ul>
          <li className="p-2 hover:bg-blue-700">
            <a href="#" className="flex items-center">
              <FaHome className="mr-2" />
              Home
            </a>
          </li>
          <li className="p-2 hover:bg-blue-700">
            <a href="#" className="flex items-center">
              <FaUser className="mr-2" />
              Profile
            </a>
          </li>
          <li className="p-2 hover:bg-blue-700">
            <a href="#" className="flex items-center">
              <FaCog className="mr-2" />
              Settings
            </a>
          </li>
          <li className="p-2 hover:bg-blue-700">
            <Link to={"/addUser"} className="flex items-center">
              <FaCog className="mr-2" />
              Add User
            </Link>
          </li>
          <li className="p-2 hover:bg-blue-700">
            <Link to={"/removeUser"} className="flex items-center">
              <FaCog className="mr-2" />
              Remove User
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 bg-blue-700 text-white rounded focus:outline-none"
        />
      </div>
      <div className="p-4 border-t border-blue-700">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
          <div className="ml-3">
            <p className="text-sm font-medium">John Doe</p>
            <button onClick={() => {
                
            }} className="text-xs text-gray-400">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
