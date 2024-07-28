import React, { useState } from 'react';

const initialGrievances = [
    {
        id: 1,
        name: 'John Doe',
        location: 'Village A',
        email: 'johndoe@example.com',
        grievanceType: 'query',
        grievanceDetails: 'Need more medical supplies.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 2,
        name: 'Jane Smith',
        location: 'Village B',
        email: 'janesmith@example.com',
        grievanceType: 'concern',
        grievanceDetails: 'Water supply issue.',
        status: 'Resolved',
        reply: 'Issue resolved, water supply restored.'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        location: 'Village C',
        email: 'alicejohnson@example.com',
        grievanceType: 'query',
        grievanceDetails: 'Request for additional educational resources.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 4,
        name: 'Bob Brown',
        location: 'Village D',
        email: 'bobbrown@example.com',
        grievanceType: 'concern',
        grievanceDetails: 'Electricity outage.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 5,
        name: 'Carol White',
        location: 'Village E',
        email: 'carolwhite@example.com',
        grievanceType: 'complaint',
        grievanceDetails: 'Poor road conditions.',
        status: 'Resolved',
        reply: 'Road maintenance scheduled.'
    },
    {
        id: 6,
        name: 'David Green',
        location: 'Village F',
        email: 'davidgreen@example.com',
        grievanceType: 'query',
        grievanceDetails: 'Information on upcoming vaccination drives.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 7,
        name: 'Emma Black',
        location: 'Village G',
        email: 'emmablack@example.com',
        grievanceType: 'concern',
        grievanceDetails: 'Lack of sanitation facilities.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 8,
        name: 'Frank Blue',
        location: 'Village H',
        email: 'frankblue@example.com',
        grievanceType: 'complaint',
        grievanceDetails: 'Inadequate food distribution.',
        status: 'Resolved',
        reply: 'Food distribution improved.'
    },
    {
        id: 9,
        name: 'Grace Gray',
        location: 'Village I',
        email: 'gracegray@example.com',
        grievanceType: 'query',
        grievanceDetails: 'Request for more clean water sources.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 10,
        name: 'Henry Orange',
        location: 'Village J',
        email: 'henryorange@example.com',
        grievanceType: 'concern',
        grievanceDetails: 'High crime rates.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 11,
        name: 'Ivy Purple',
        location: 'Village K',
        email: 'ivypurple@example.com',
        grievanceType: 'complaint',
        grievanceDetails: 'Unstable internet connection.',
        status: 'Resolved',
        reply: 'Internet connection stabilized.'
    },
    {
        id: 12,
        name: 'Jack Red',
        location: 'Village L',
        email: 'jackred@example.com',
        grievanceType: 'query',
        grievanceDetails: 'Update on agricultural support programs.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 13,
        name: 'Karen Yellow',
        location: 'Village M',
        email: 'karenyellow@example.com',
        grievanceType: 'concern',
        grievanceDetails: 'Inadequate healthcare facilities.',
        status: 'Pending',
        reply: ''
    },
    {
        id: 14,
        name: 'Larry Brown',
        location: 'Village N',
        email: 'larrybrown@example.com',
        grievanceType: 'complaint',
        grievanceDetails: 'Unavailability of public transportation.',
        status: 'Resolved',
        reply: 'Public transportation options increased.'
    },
    {
        id: 15,
        name: 'Mia Pink',
        location: 'Village O',
        email: 'miapink@example.com',
        grievanceType: 'query',
        grievanceDetails: 'Details on local community events.',
        status: 'Pending',
        reply: ''
    }
];

const GrievanceList = () => {
    const [grievances, setGrievances] = useState(initialGrievances);
    const [replyData, setReplyData] = useState({
        id: null,
        reply: ''
    });

    const handleReplyChange = (e) => {
        setReplyData({
            ...replyData,
            reply: e.target.value
        });
    };

    const handleReplySubmit = (id) => {
        const updatedGrievances = grievances.map(grievance => {
            if (grievance.id === id) {
                return {
                    ...grievance,
                    status: 'Replied',
                    reply: replyData.reply
                };
            }
            return grievance;
        });

        setGrievances(updatedGrievances);
        setReplyData({
            id: null,
            reply: ''
        });
    };

    const openReplyForm = (id) => {
        setReplyData({
            id,
            reply: ''
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-bold mb-6">Grievances List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reply</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {grievances.map(grievance => (
                            <tr key={grievance.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{grievance.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{grievance.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{grievance.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{grievance.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{grievance.grievanceType}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{grievance.grievanceDetails}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{grievance.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {grievance.reply || (
                                        <>
                                            <button 
                                                className="bg-navy-700 text-white px-4 py-2 rounded-lg" 
                                                onClick={() => openReplyForm(grievance.id)}
                                            >
                                                Reply
                                            </button>
                                            {replyData.id === grievance.id && (
                                                <div className="mt-4">
                                                    <textarea
                                                        value={replyData.reply}
                                                        onChange={handleReplyChange}
                                                        placeholder="Enter your reply"
                                                        rows="3"
                                                        className="w-full px-3 py-2 border rounded-lg"
                                                    />
                                                    <button
                                                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
                                                        onClick={() => handleReplySubmit(grievance.id)}
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            )}
                                        </>
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

export default GrievanceList;
