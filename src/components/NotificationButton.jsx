import React, { useState, useRef, useEffect } from 'react';

// Extended notifications list
const notifications = [
  { id: 1, message: 'New scheme for rural development announced by the Government of India.', timestamp: '5 minutes ago' },
  { id: 2, message: 'PM CARES Fund now accepting donations for COVID-19 relief.', timestamp: '10 minutes ago' },
  { id: 3, message: 'Registration for Pradhan Mantri Awas Yojana open until the end of the month.', timestamp: '1 hour ago' },
  { id: 4, message: 'Government launches new skill development program.', timestamp: '2 hours ago' },
  { id: 5, message: 'Subsidies available for small businesses under the Startup India scheme.', timestamp: '4 hours ago' },
  { id: 6, message: 'New initiative for digital literacy across rural areas.', timestamp: '6 hours ago' },
  { id: 7, message: 'Healthcare grants announced for urban poor.', timestamp: '8 hours ago' },
  { id: 8, message: 'Tax benefits for donations to public welfare organizations.', timestamp: '12 hours ago' },
  { id: 9, message: 'New employment opportunities under the MNREGA scheme.', timestamp: '1 day ago' },
  { id: 10, message: 'Government introduces new educational scholarships for students.', timestamp: '2 days ago' },
  { id: 11, message: 'Update on rural electrification projects.', timestamp: '3 days ago' },
  { id: 12, message: 'New loan schemes for women entrepreneurs launched.', timestamp: '4 days ago' },
  { id: 13, message: 'Government announces increased funding for public transport.', timestamp: '5 days ago' },
  { id: 14, message: 'New rural health initiatives to combat seasonal diseases.', timestamp: '6 days ago' },
  { id: 15, message: 'Pradhan Mantri Jan Dhan Yojana accounts to be extended to more families.', timestamp: '1 week ago' },
  // Add more notifications as needed
];

const NotificationDropdown = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null; // Render nothing if dropdown is closed

  return (
    <div className="fixed top-16 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
              <p className="text-sm text-gray-900">{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.timestamp}</p>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No notifications</div>
        )}
      </div>
      <button
        className="w-full px-4 py-2 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-b-lg"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

const NotificationButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center justify-center w-10 h-10 bg-[#fcb900] text-white rounded-full shadow-lg hover:bg-[#6ac2a1] focus:outline-none focus:ring-2 focus:ring-[#7bdcb5]"
        onClick={toggleDropdown}
      >
        <span className="relative flex items-center justify-center w-6 h-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M12 24C13.1046 24 14 23.1046 14 22H10C10 23.1046 10.8954 24 12 24ZM18.707 16L18 15.293V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V15.293L5.293 16C4.903 16.39 4.719 16.915 4.798 17.422C4.87699 17.9288 5.21074 18.3692 5.707 18.617L6 18.75H18L18.293 18.617C18.7893 18.3692 19.123 17.9288 19.202 17.422C19.281 16.915 19.097 16.39 18.707 16Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
      <NotificationDropdown isOpen={isDropdownOpen} onClose={() => setIsDropdownOpen(false)} notifications={notifications} />
    </div>
  );
};

export default NotificationButton;
