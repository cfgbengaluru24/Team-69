import React, { useState , useEffect} from 'react';

const DataBox = ({ title, data }) => {
  const [response,setResponse] = useState(false)
  useEffect(()=>{
    async function func(){
      try {
        const res = await fetch("http://localhost:8000/api/updates/fetch-users",{
         method : 'GET'
       })
       // console.log(response);
       const data = await res.json()
       console.log(data);
       const temp = data.data
       if(res.ok) {
         setResponse(temp)
       }
     } catch (error) {
       setError(error.message)
     }
    }
    func();
  },[])


  return (
    <div className="bg-gray-800 rounded-lg shadow p-4 h-96 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-200">{title}</h2>
      <table className="w-full">
        <thead className="bg-gray-700">
          <tr>
            {title === 'Users' ? (
              <>
                <th className="text-left font-medium text-gray-300 p-2">Name</th>
                <th className="text-left font-medium text-gray-300 p-2">Age</th>
                <th className="text-left font-medium text-gray-300 p-2">Gender</th>
              </>
            ) : title === 'Schemes' ? (
              <>
                <th className="text-left font-medium text-gray-300 p-2">Name of Scheme</th>
                <th className="text-left font-medium text-gray-300 p-2">Action</th>
              </>
            ) : (
              <>
                <th className="text-left font-medium text-gray-300 p-2">Applicant</th>
                <th className="text-left font-medium text-gray-300 p-2">Date</th>
                <th className="text-left font-medium text-gray-300 p-2">Action</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {title === 'Users' ? (
            <tr className="hover:bg-gray-700">
              <td className="text-left p-2 text-gray-300">John Doe</td>
              <td className="text-left p-2 text-gray-300">30</td>
              <td className="text-left p-2 text-gray-300">Male</td>
            </tr>
          ) : title === 'Schemes' ? (
            <tr className="hover:bg-gray-700">
              <td className="text-left p-2 text-gray-300">Scheme 1</td>
              <td className="text-left p-2">
                <button className="text-blue-400 hover:underline">View Details</button>
              </td>
            </tr>
          ) : (
            <tr className="hover:bg-gray-700">
              <td className="text-left p-2 text-gray-300">Applicant 1</td>
              <td className="text-left p-2 text-gray-300">2023-01-01</td>
              <td className="text-left p-2">
                <button className="text-blue-400 hover:underline">Resolve</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* {
        response === false ? <p>HEllo</p> : (
          response.map(ele => {
            return(
              <div className='text-gray-400 flex px-4'>
                <p>{ele.name}</p>
                <p>{ele.region}</p>
              </div>
            )
          })
        )
      } */}

    </div>
  );
};

export default DataBox;
