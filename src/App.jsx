import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registrationuser from './Registrationformuser';
import Registrationflw from './Registrationformflw';
import ThankYou from './Thankyou';
import Navbar from './Navbar';
import SOPSection from './SOP';
import ContactNavbar from './Navbar1';
import CardGrid from './cardgrid';
import DataGrid from './datagrid';
import Sidebar from './sidebar';
import Chatbot from './chatbot';
import DashNavbar from './dashNavbar';
import Login from './loginpage';
import App1 from './App1';
import AddUser from './AddUser';
import RemoveUser from "./RemoveUser"
const DashboardLayout = () => {
  const [showRegistrationUser, setShowRegistrationUser] = useState(true);

  const toggleForm = () => {
    setShowRegistrationUser(!showRegistrationUser);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        {/* <DashNavbar /> */}
        <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ContactNavbar />
                <Navbar />
                <p className="text-6xl font-thin text-white bg-gradient-to-r from-slate-800 via-slate-900 to-black animate-pulse flex items-center justify-center p-6">
                  Committed to making sustainable change!
                </p>

                <div className="bg-slate-800 flex flex-row justify-around items-center p-4">
                  <div className="w-full max-w-lg">
                    {showRegistrationUser ? (
                      <Registrationuser toggleForm={toggleForm} />
                    ) : (
                      <Registrationflw toggleForm={toggleForm} />
                    )}
                  </div>
                  <Login onLoginSuccess={handleLoginSuccess} />
                
                </div>
                {/* <CardGrid />
                <DataGrid /> */}
              </>
            }
          />
            <Route path="/addUser" element={<AddUser />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/sop" element={<SOPSection />} />
          <Route path='/dashboard' element={<App1 />}/>
          <Route path='/removeUser' element = {<RemoveUser/>}/>
        </Routes>
        </Router>
      </div>
      <Chatbot />
    </div>
  );
};

export default DashboardLayout;
