import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DashboardLayout from './DashboardLayout';
// import Login from './loginpage'; // Import Login component
import DataGrid from './datagrid';
import DataBox from './databox';
import Sidebar from './sidebar';

const App1 = () => {
  return (
     <div className='flex justify-between gap-4'>
        <div className='flex-none 1/3'>
        <Sidebar/>
        </div>
        <div className='flex-grow'>
        <DataBox/>
        <DataGrid />
        {/* <DataBox/> */}
        </div>
     </div>
  );
};

export default App1;
