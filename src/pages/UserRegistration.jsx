import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const UserRegistration = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    location: '',
    division: '',
    pincode: '',
    language: '',
    education: '',
  });
  const [uniqueId, setUniqueId] = useState('');
  const [signature, setSignature] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSignature(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateCard = () => {
    const id = Date.now().toString();  // Simple unique ID generation
    setUniqueId(id);
    setShowCard(true);
  };

  const printCard = () => {
    window.print();
  };

  const saveCard = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("User Card", 20, 20);
    doc.text(`Name: ${userDetails.name}`, 20, 30);
    doc.text(`Age: ${userDetails.age}`, 20, 40);
    doc.text(`Location: ${userDetails.location}`, 20, 50);
    doc.text(`Division: ${userDetails.division}`, 20, 60);
    doc.text(`Pincode: ${userDetails.pincode}`, 20, 70);
    doc.text(`Language: ${userDetails.language}`, 20, 80);
    doc.text(`Education: ${userDetails.education}`, 20, 90);
    doc.text(`Unique ID: ${uniqueId}`, 20, 100);
    
    if (signature) {
      doc.addImage(signature, 'PNG', 20, 110, 50, 20); // Adjust image size and position as needed
    }

    doc.save('user-card.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold text-navy-700 mb-6">Register New User</h1>
      <div className="mb-6">
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 w-full border rounded-lg mb-4"
        />
        <input
          type="number"
          name="age"
          value={userDetails.age}
          onChange={handleChange}
          placeholder="Age"
          className="p-2 w-full border rounded-lg mb-4"
        />
        <input
          type="text"
          name="location"
          value={userDetails.location}
          onChange={handleChange}
          placeholder="Location"
          className="p-2 w-full border rounded-lg mb-4"
        />
        <input
          type="text"
          name="division"
          value={userDetails.division}
          onChange={handleChange}
          placeholder="Division"
          className="p-2 w-full border rounded-lg mb-4"
        />
        <input
          type="text"
          name="pincode"
          value={userDetails.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          className="p-2 w-full border rounded-lg mb-4"
        />
        <input
          type="text"
          name="language"
          value={userDetails.language}
          onChange={handleChange}
          placeholder="Language"
          className="p-2 w-full border rounded-lg mb-4"
        />
        <input
          type="text"
          name="education"
          value={userDetails.education}
          onChange={handleChange}
          placeholder="Education"
          className="p-2 w-full border rounded-lg mb-4"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 w-full border rounded-lg mb-4"
        />
        <button
          type="button"
          onClick={generateCard}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-48"
        >
          Register User
        </button>
      </div>
      <h1 className="text-3xl font-bold text-navy-700 mb-6">Generating Community Card</h1>
      {showCard && (
        <div className="p-6 bg-gray-100 border rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">User Card</h2>
          <p className="text-lg font-bold">Name: {userDetails.name}</p>
          <p>Age: {userDetails.age}</p>
          <p>Location: {userDetails.location}</p>
          <p>Division: {userDetails.division}</p>
          <p>Pincode: {userDetails.pincode}</p>
          <p>Language: {userDetails.language}</p>
          <p>Education: {userDetails.education}</p>
          <p className="mt-4 text-gray-700">Unique ID: {uniqueId}</p>
          {signature && <img src={signature} alt="Signature" className="mt-4" />}
          <div className="mt-6 flex space-x-4">
            <button
              type="button"
              onClick={printCard}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            >
              Print
            </button>
            <button
              type="button"
              onClick={saveCard}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRegistration;
