import express from "express";
import pg from 'pg'
import { config } from 'dotenv'

import pkg from 'pg';
const { Pool } = pkg;


// Configura la conexión a la base de datos en Render
const pool = new Pool({
  user: 'nutriscan_db_user',
  host: 'postgres://nutriscan_db_user:D85SsQNsI74qwGGrKNsk70UVstWa5c6I@dpg-cnjrlgocmk4c739ik8v0-a/nutriscan_db',
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

app.get('/ping', async (req, res) => {
  try {
    // Intenta ejecutar la consulta 'SELECT NOW()' en la base de datos
    const result = await pool.query('SELECT NOW()');
    // Si la consulta se ejecuta correctamente, envía una respuesta con un mensaje de éxito
    return res.json({ connected: true, message: 'Conexión exitosa con la base de datos' });
  } catch (error) {
    // Si se produce un error al ejecutar la consulta, envía una respuesta con un mensaje de error
    console.error('Error al ejecutar la consulta:', error);
    return res.status(500).json({ connected: false, message: 'Error al conectar con la base de datos' });
  }
});

app.listen(5432)
console.log("server port ", 5432)