import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import GrievanceRedressal from './pages/GrievanceRedressal';

import UserRegistration from './pages/UserRegistration';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
       
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/GrievanceRedressal" element={<GrievanceRedressal />} />
          <Route path="/UserRegistration" element={<UserRegistration />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
