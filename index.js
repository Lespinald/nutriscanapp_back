import express from "express";
import pg from 'pg'
import { config } from 'dotenv'

const app = express()

new pg.Pool({
    conecctionString: process.env.DATABASE_URL_PRODUCTION

    })

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/ping', async (req,res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(3000)
console.log("server port ", 3000)