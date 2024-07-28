import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import DataBox from './databox';
/// import { discrepanciesData } from './sampledata';

const DataGrid = () => {
  const [users, setUsers] = useState([]);
  const [schemes,setSchemes] = useState([]);

//   useEffect(() => {
    
//     async function fetchUsers() {
//         try {
//           const { data } = await axios.get('url', config); // Replace 'url' and 'config' with your actual API endpoint and config
//           const formattedUsers = data.map(user => ({
//             name: user.name,
//             age: user.age,
//             gender: 'Female' // Fixed gender
//           }));
//           setUsers(formattedUsers);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//         }
//       }

//     async function fetchSchemes(){
//         try {
//             const { data } = await axios.get('url', config); // Replace 'url' and 'config' with your actual API endpoint and config
//             const formattedUsers = data.map(user => ({
//               name: user.name,
//             }));
//             setSchemes(formattedUsers);
//           } catch (error) {
//             console.error('Error fetching user data:', error);
//           }
//     }
//     fetchUsers();
//     fetchSchemes();
//   },[])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      <DataBox title="Users" data={users} />
      <DataBox title="Schemes" data={schemes} />
      {/* <DataBox title="Application Status" data={discrepanciesData} /> */}
    </div>
  );
};

export default DataGrid;
