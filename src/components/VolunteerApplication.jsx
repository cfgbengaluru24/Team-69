import React, { useState } from 'react';

const volunteerData = [
    { id: 1, name: 'John Doe', age: 25, location: 'New York', language: 'English', skills: 'Teaching', status: 'Pending' },
    { id: 2, name: 'Jane Smith', age: 30, location: 'Los Angeles', language: 'Spanish', skills: 'Healthcare', status: 'Pending' },
    { id: 3, name: 'Alice Johnson', age: 28, location: 'Chicago', language: 'English', skills: 'Engineering', status: 'Pending' },
    { id: 4, name: 'Michael Brown', age: 22, location: 'Houston', language: 'English', skills: 'IT Support', status: 'Pending' },
    { id: 5, name: 'Emily Davis', age: 35, location: 'Phoenix', language: 'Spanish', skills: 'Marketing', status: 'Pending' },
    { id: 6, name: 'David Wilson', age: 29, location: 'Philadelphia', language: 'English', skills: 'Finance', status: 'Pending' },
    { id: 7, name: 'Sarah Martinez', age: 31, location: 'San Antonio', language: 'Spanish', skills: 'Legal', status: 'Pending' },
    { id: 8, name: 'James Anderson', age: 27, location: 'San Diego', language: 'English', skills: 'Operations', status: 'Pending' },
    { id: 9, name: 'Patricia Taylor', age: 26, location: 'Dallas', language: 'English', skills: 'Human Resources', status: 'Pending' },
    { id: 10, name: 'Robert Thomas', age: 33, location: 'San Jose', language: 'English', skills: 'Project Management', status: 'Pending' },
    { id: 11, name: 'Linda Moore', age: 32, location: 'Austin', language: 'Spanish', skills: 'Education', status: 'Pending' },
    { id: 12, name: 'Christopher Jackson', age: 24, location: 'Jacksonville', language: 'English', skills: 'Research', status: 'Pending' },
    { id: 13, name: 'Barbara White', age: 28, location: 'Fort Worth', language: 'English', skills: 'Design', status: 'Pending' },
    { id: 14, name: 'Paul Harris', age: 34, location: 'Columbus', language: 'English', skills: 'Logistics', status: 'Pending' },
    { id: 15, name: 'Nancy Martin', age: 29, location: 'Charlotte', language: 'English', skills: 'Public Relations', status: 'Pending' },
    { id: 16, name: 'Kevin Lee', age: 30, location: 'San Francisco', language: 'English', skills: 'Community Outreach', status: 'Pending' },
    { id: 17, name: 'Karen Walker', age: 25, location: 'Indianapolis', language: 'English', skills: 'Event Planning', status: 'Pending' },
    { id: 18, name: 'Mark Hall', age: 27, location: 'Seattle', language: 'English', skills: 'Fundraising', status: 'Pending' },
    { id: 19, name: 'Donna Young', age: 31, location: 'Denver', language: 'Spanish', skills: 'Health Services', status: 'Pending' },
    { id: 20, name: 'Steven King', age: 26, location: 'Washington', language: 'English', skills: 'Writing', status: 'Pending' },
    { id: 21, name: 'Michelle Wright', age: 33, location: 'Boston', language: 'English', skills: 'Translation', status: 'Pending' },
    { id: 22, name: 'George Lopez', age: 30, location: 'El Paso', language: 'Spanish', skills: 'Community Development', status: 'Pending' },
    { id: 23, name: 'Jennifer Scott', age: 28, location: 'Detroit', language: 'English', skills: 'Counseling', status: 'Pending' },
    { id: 24, name: 'Thomas Green', age: 32, location: 'Nashville', language: 'English', skills: 'Public Health', status: 'Pending' },
    { id: 25, name: 'Jessica Adams', age: 29, location: 'Memphis', language: 'English', skills: 'Advocacy', status: 'Pending' },
    { id: 26, name: 'Charles Nelson', age: 27, location: 'Baltimore', language: 'English', skills: 'Training', status: 'Pending' },
    { id: 27, name: 'Margaret Baker', age: 34, location: 'Louisville', language: 'English', skills: 'Social Media', status: 'Pending' },
    { id: 28, name: 'Daniel Carter', age: 25, location: 'Milwaukee', language: 'English', skills: 'Mentoring', status: 'Pending' },
    { id: 29, name: 'Elizabeth Mitchell', age: 30, location: 'Portland', language: 'English', skills: 'Administration', status: 'Pending' },
    { id: 30, name: 'Matthew Perez', age: 31, location: 'Las Vegas', language: 'Spanish', skills: 'Volunteer Coordination', status: 'Pending' },
  ];
  
const VolunteerApplication = () => {
  const [volunteers, setVolunteers] = useState(volunteerData);

  const handleDecision = (id, decision) => {
    setVolunteers(volunteers.map(volunteer => 
      volunteer.id === id ? { ...volunteer, status: decision } : volunteer
    ));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-bold text-navy-700 mb-4">Volunteer Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Age</th>
              <th className="px-4 py-2 border-b">Location</th>
              <th className="px-4 py-2 border-b">Language</th>
              <th className="px-4 py-2 border-b">Skills</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map(volunteer => (
              <tr key={volunteer.id}>
                <td className="px-4 py-2 border-b">{volunteer.name}</td>
                <td className="px-4 py-2 border-b">{volunteer.age}</td>
                <td className="px-4 py-2 border-b">{volunteer.location}</td>
                <td className="px-4 py-2 border-b">{volunteer.language}</td>
                <td className="px-4 py-2 border-b">{volunteer.skills}</td>
                <td className="px-4 py-2 border-b">{volunteer.status}</td>
                <td className="px-4 py-2 border-b">
                  {volunteer.status === 'Pending' ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDecision(volunteer.id, 'Under Consideration')}
                        className="px-3 py-1 bg-blue-500 text-white rounded-md"
                      >
                        Review
                      </button>
                      <button
                        onClick={() => handleDecision(volunteer.id, 'Accepted')}
                        className="px-3 py-1 bg-green-500 text-white rounded-md"
                      >
                        Decide
                      </button>
                    </div>
                  ) : (
                    <span>{volunteer.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerApplication;
