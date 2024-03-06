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
  password: 'tu_contraseña_de_la_base_de_datos',
  port: 5432,
  ssl: true // Asegúrate de que esto esté configurado correctamente si Render requiere SSL
});

const app = express()

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/ping', async (req,res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(5432)
console.log("server port ", 5432)