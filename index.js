import express from "express";
import pg from 'pg'
import { config } from 'dotenv'

import pkg from 'pg';
const { Pool } = pkg;


// Configura la conexión a la base de datos en Render
const pool = new Pool({
  user: 'nutriscan_db_user',
  host: 'nutriscanapp-back.onrender.com',
  database: 'nutriscan_db',
  password: 'D85SsQNsI74qwGGrKNsk70UVstWa5c6I',
  port: 5432,
  ssl: true // Asegúrate de que esto esté configurado correctamente si Render requiere SSL
});

const app = express()

app.get('/', (req,res) => {
  res.send('Hello world')
})

app.get('/bing', async (req,res) => {   
  return res.json(pool)
})

app.get('/ping', async (req,res) => {
  const result = await pool.query('SELECT NOW()')
  return res.json(result)
})

app.listen(5432)
console.log("server port ", 5432)