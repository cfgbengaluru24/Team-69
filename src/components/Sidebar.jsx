import React from 'react';

const Sidebar = ({ onItemSelected }) => {
  const handleItemClick = (item) => {
    onItemSelected(item);
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-semibold bg-gray-700">Menu</div>
      <div className="flex-1 overflow-y-auto">
        <div 
          className="p-4 cursor-pointer hover:bg-gray-600"
          onClick={() => handleItemClick('FwlTracker')}
        >
          FWL Tracker
        </div>
       
        <div 
          className="p-4 cursor-pointer hover:bg-gray-600"
          onClick={() => handleItemClick('GrievanceList')}
        >
          Grievance List
        </div>

        <div 
          className="p-4 cursor-pointer hover:bg-gray-600"
          onClick={() => handleItemClick('VolunteerApplication')}
        >
          Volunteer Applications
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
