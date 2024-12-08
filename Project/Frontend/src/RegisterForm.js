// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');
//   const history = useHistory();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match');
//       return;
//     }
//     try {
//       await axios.post('/auth/register', { name, email, password, phone });
//       history.push('/login'); // Redirect to the login page on success
//     } catch (error) {
//       setMessage(error.response.data.message || 'An error occurred');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', padding: '1em', textAlign: 'center' }}>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
//           />
//         </div>
//         <button type="submit" style={{ padding: '0.5em 1em', backgroundColor: '#E07B0F', color: '#FFF', border: 'none', borderRadius: '5px' }}>
//           Register
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await axios.post('/auth/register', { name, email, password, phone });
      history.push('/login'); // Redirect to the login page on success
    } catch (error) {
      setMessage(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1em', textAlign: 'center' }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5em', margin: '0.5em 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5em 1em', backgroundColor: '#E07B0F', color: '#FFF', border: 'none', borderRadius: '5px' }}>
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
