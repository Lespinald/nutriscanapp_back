import express from "express";
import pg from 'pg'
import { config } from 'dotenv'

const pool = require('./config')

const app = express()

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/ping', async (req,res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(3000)
console.log("server port ", 3000)