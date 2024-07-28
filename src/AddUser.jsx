import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    income: '',
    education: '',
    aadhar: '',
    religion: '',
    caste: '',
    phone: '',
    region: '', // Added division field
    houseOwned: '',
    maritalStatus: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
//   localStorage.setItem("userId",)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    formData.maritalStatus = formData.maritalStatus === 'Single' ? true : false
    formData.houseOwned = formData.houseOwned === 'Yes' ? true : false
    formData.age = Number(formData.age)
    // Check if any field is empty
    try {
      const response = await fetch("http://localhost:8000/api/workers/fwl-register/66a55b01678b621161bee7f8",{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
      })
      // console.log(response);
      const data = await response.json()
      console.log(data);
      if(response.ok) {
        navigate("/dashboard")
      }
    } catch (error) {
      setError(error.message)
    }
    setError(''); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 rounded-2xl ml-20">
      <div className="bg-slate-900 p-4 rounded-lg shadow-lg w-full max-w-2xl border border-sky-100">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">REGISTRATION FORM</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-40 text-white font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="age" className="w-40 text-white font-medium">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="income" className="w-40 text-white font-medium">Income</label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="education" className="w-40 text-white font-medium">Highest Education</label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="aadhar" className="w-40 text-white font-medium">Aadhar No</label>
            <input
              type="text"
              id="aadhar"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="religion" className="w-40 text-white font-medium">Religion</label>
            <input
              type="text"
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="caste" className="w-40 text-white font-medium">Caste</label>
            <input
              type="text"
              id="caste"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="phone" className="w-40 text-white font-medium">Phone No</label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="division" className="w-40 text-white font-medium">Division</label>
            <input
              type="text"
              id="division"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="houseOwned" className="w-40 text-white font-medium">House Owned</label>
            <select
              id="houseOwned"
              name="houseOwned"
              value={formData.houseOwned}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex items-center mb-6">
            <label htmlFor="maritalStatus" className="w-40 text-white font-medium">Marital Status</label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="ml-4 p-2 flex-1 border-2 border-slate-800 rounded focus:outline-none focus:border-slate-800"
              required
            >
              <option value="">Select...</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-800 transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
