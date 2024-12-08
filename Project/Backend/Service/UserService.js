// import db from '../Config/Database.js';

// class UserService {
//     static async findByEmail(email) {
//         try {
//             const [rows] = await db.query("SELECT * FROM USERS WHERE EMAIL = ?", [email]);
//             return rows.length ? rows[0] : null;
//         } catch (error) {
//             console.error('Database query error:', error.message);
//             throw error;
//         }
//     }

//     static async createUser(user) {
//         try {
//             const { name, email, password, role, phone } = user;
//             const [result] = await db.query(
//                 "INSERT INTO USERS (NAME, EMAIL, PASSWORD, ROLE, PHONE) VALUES (?, ?, ?, ?, ?)",
//                 [name, email, password, role, phone]
//             );
//             return { USER_ID: result.insertId, NAME: name, EMAIL: email, ROLE: role, PHONE: phone };
//         } catch (error) {
//             console.error('Database query error:', error.message);
//             throw error;
//         }
//     }
// }

// export default UserService;

import db from '../Config/Database.js';

class UserService {
    static async findByEmail(email) {
        try {
            const [rows] = await db.query("SELECT * FROM USERS WHERE EMAIL = ?", [email]);
            return rows.length ? rows[0] : null;
        } catch (error) {
            console.error('Database query error:', error.message);
            throw error;
        }
    }

    static async createUser(user) {
        try {
            const { name, email, password, role, phone } = user;
            const [result] = await db.query(
                "INSERT INTO USERS (NAME, EMAIL, PASSWORD, ROLE, PHONE) VALUES (?, ?, ?, ?, ?)",
                [name, email, password, role, phone]
            );
            return { USER_ID: result.insertId, NAME: name, EMAIL: email, ROLE: role, PHONE: phone };
        } catch (error) {
            console.error('Database query error:', error.message);
            throw error;
        }
    }
}

export default UserService;