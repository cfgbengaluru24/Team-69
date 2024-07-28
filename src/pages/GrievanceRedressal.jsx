import React, { useState } from 'react';

const GrievanceRedressal = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        email: '',
        grievanceType: 'query',
        grievanceDetails: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="text-center mb-6">
                <h1 className=" text-3xl font-bold text-navy-700">Grievance Redressal Portal</h1>
            </header>

            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 w-full border rounded-lg"
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Location:
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 w-full border rounded-lg"
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 w-full border rounded-lg"
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Grievance Type:
                                    <select
                                        name="grievanceType"
                                        value={formData.grievanceType}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border rounded-lg"
                                    >
                                        <option value="query">FLW Query</option>
                                        <option value="concern">Beneficiary Concern</option>
                                    </select>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Grievance Details:
                                    <textarea
                                        name="grievanceDetails"
                                        value={formData.grievanceDetails}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="mt-1 p-2 w-full border rounded-lg"
                                    />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-navy-700  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy-700 mb-4">Track Your Grievance Status</h2>
                        <p className="mb-4">Enter your grievance ID to check the status of your submission.</p>
                        <input
                            type="text"
                            placeholder="Enter Grievance ID"
                            className="p-2 w-full border rounded-lg mb-4"
                        />
                        <button
                            type="button"
                            className="bg-[#fcb900] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full"
                        >
                            Check Status
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GrievanceRedressal;
