import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FwlTracker from '../components/FwlTracker';
import GrievanceList from '../components/GrievanceList';
import NotificationButton from '../components/NotificationButton';
import DivisionHistogram from '../components/Histogram'; 
import Dropdown from '../components/Dropdown'; // Import the dropdown component
import VolunteerApplication from '../components/VolunteerApplication';




const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'FwlTracker':
        return <FwlTracker />;
      case 'GrievanceList':
        return <GrievanceList />;
      case 'VolunteerApplication':
        return <VolunteerApplication />;
    default:
        return <DivisionHistogram />; // Render histogram when no specific component is selected
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-navy-700 text-white py-2 px-4 flex items-center justify-between shadow-md h-[70px] relative">
        <h1 className="text-lg font-semibold">Indus Action Admin Dashboard</h1>
        <div className="flex items-center space-x-2"> {/* Adjust space-x-2 to space-x-4 if you need more space */}
          <NotificationButton count={5} className="mr-2" /> {/* Add margin-right to NotificationButton */}
          <Dropdown />
        </div>
      </header>

      <div className="flex flex-1">
        <Sidebar onItemSelected={setSelectedComponent} />
        
        <div className="flex-1 relative">
          <main className="flex-1 mt-4 relative z-10">
            {renderComponent()}
          
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
