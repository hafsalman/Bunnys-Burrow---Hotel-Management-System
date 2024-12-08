//Alizah Basit (22K-5155)
//Hafsa Salman (22K-5161)

import db from './Backend/Config/Database.js'
import dotenv from 'dotenv';

(async () =>
    {
        try 
        {
            await db.connect();
            console.log('Database connection successful');
        } 
        
        catch (err) 
        {
            console.error('Error connecting to the database:', err.message);
        } 
        
        finally 
        {
            db.end();
        }
    }
)();