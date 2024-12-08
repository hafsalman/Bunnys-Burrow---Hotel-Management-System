// import UserService from '../Service/UserService.js';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// class AuthController 
// {
//     static async login(req, res) 
//     {
//         const { email, password } = req.body;
//         try {
//             const user = await UserService.findByEmail(email);
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             const isMatch = await bcrypt.compare(password, user.PASSWORD);
//             if (!isMatch) {
//                 return res.status(401).json({ message: 'Invalid credentials' });
//             }
//             const token = jwt.sign({ userId: user.USER_ID, role: user.ROLE }, process.env.SESSION_SECRET, { expiresIn: '1h' });
//             return res.status(200).json({ message: 'Login successful', token });
//         } catch (error) {
//             res.status(500).json({ message: 'Internal server error', error: error.message });
//         }
//     }

//     static async register(req, res) {
//         const { name, email, password, phone } = req.body;
//         const role = 'Customer'; 
//         try {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             await UserService.createUser({ name, email, password: hashedPassword, role, phone });
//             return res.status(201).json({ message: 'User registered successfully' });
//         } catch (error) {
//             res.status(500).json({ message: 'Internal server error', error: error.message });
//         }
//     }
// }

// export default AuthController;

import UserService from '../Service/UserService.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await UserService.findByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const isMatch = await bcrypt.compare(password, user.PASSWORD);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ userId: user.USER_ID, role: user.ROLE }, process.env.SESSION_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    static async register(req, res) {
        const { name, email, password, phone } = req.body;
        const role = 'Customer'; // Default role to 'Customer'
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await UserService.createUser({ name, email, password: hashedPassword, role, phone });
            return res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
}

export default AuthController;