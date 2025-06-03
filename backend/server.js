import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//TEST
app.get('/api/test', async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT "Hello, World!" AS message');
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

//START SERVER
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});