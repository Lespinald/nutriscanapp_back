import express from "express";
import pg from 'pg'
const { Pool } = require('pg');
import { config } from 'dotenv'

const app = express()

const pool = new Pool({
    user: 'nutriscan_db_user',
    host: 'dpg-cnjrlgocmk4c739ik8v0-a',
    database: 'nutriscan_db',
    password: 'D85SsQNsI74qwGGrKNsk70UVstWa5c6I',
    port: 5432, // Your database port
  });

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/ping', async (req,res) => {
    res.send('Hello world')
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(3000)
console.log("server port ", 3000)