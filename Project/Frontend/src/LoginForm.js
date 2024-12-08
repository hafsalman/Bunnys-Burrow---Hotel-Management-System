// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const history = useHistory();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token); // Store the JWT token
//       history.push('/dashboard'); // Redirect to the dashboard on success
//     } catch (error) {
//       setMessage(error.response.data.message || 'An error occurred');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', padding: '1em', textAlign: 'center' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
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
//         <button type="submit" style={{ padding: '0.5em 1em', backgroundColor: '#62AC5A', color: '#FFF', border: 'none', borderRadius: '5px' }}>
//           Login
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Store the JWT token
      history.push('/dashboard'); // Redirect to the dashboard on success
    } catch (error) {
      setMessage(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1em', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" style={{ padding: '0.5em 1em', backgroundColor: '#62AC5A', color: '#FFF', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;