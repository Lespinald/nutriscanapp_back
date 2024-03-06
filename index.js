import express from "express";
import pg from 'pg'
import { config } from 'dotenv'

const app = express()

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/ping', async (req,res) => {
    res.send('Hello world ping')
})

app.listen(3000)
console.log("server port ", 3000)