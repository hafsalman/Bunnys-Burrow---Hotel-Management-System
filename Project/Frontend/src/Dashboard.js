import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [role, setRole] = useState('');
  const history = useHistory();

  // Function to decode JWT token
  const decodeToken = (token) => {
    try {
      const payload = token.split('.')[1]; // Get the payload part of the token
      const decodedPayload = atob(payload); // Decode the Base64-encoded payload
      return JSON.parse(decodedPayload); // Parse the JSON string
    } catch (error) {
      console.error('Invalid token:', error.message);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setRole(decoded.role);
      } else {
        history.push('/login'); // Redirect to login if token is invalid
      }
    } else {
      history.push('/login'); // Redirect to login if no token is found
    }
  }, [history]);

  const customerMenu = [
    { name: 'Room Reservation', path: '/room-reservation' },
    { name: 'Generate Bill', path: '/generate-bill' },
    { name: 'Give Feedback', path: '/give-feedback' },
    { name: 'Event Reservation', path: '/event-reservation' }
  ];

  const adminMenu = [
    ...customerMenu,
    { name: 'View Feedback', path: '/view-feedback' },
    { name: 'Guests CheckIns/CheckOuts', path: '/guest-checkin-checkout' },
    { name: 'Housekeeping Management', path: '/housekeeping-management' }
  ];

  const menu = role === 'Admin' ? adminMenu : customerMenu;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1em', textAlign: 'center' }}>
      <h2>{role === 'Admin' ? 'Admin Dashboard' : 'Customer Dashboard'}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menu.map((item, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <a href={item.path} style={{ textDecoration: 'none', color: 'blue' }}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;