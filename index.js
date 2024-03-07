import express from "express";
import pg from 'pg'
import { config } from 'dotenv'

import pkg from 'pg';
const { Pool } = pkg;


// Configura la conexión a la base de datos en Render
const pool = new Pool({
  user: 'nutriscan_db_user',
  host: 'dpg-cnjrlgocmk4c739ik8v0-a.ohio-postgres.render.com',
  database: 'nutriscan_db',
  password: 'D85SsQNsI74qwGGrKNsk70UVstWa5c6I',
  port: 5432,
  ssl: true // Asegúrate de que esto esté configurado correctamente si Render requiere SSL
});

const app = express()

app.get('/', (req,res) => {
  res.send('Hola somos NutriScan')
})

app.get('/bing', async (req,res) => {   
  return res.json(pool)
})

app.get('/ping', async (req, res) => {
  try {
    // Intenta ejecutar la consulta 'SELECT NOW()' en la base de datos
    const result = await pool.query('SELECT NOW()');
    // Si la consulta se ejecuta correctamente, envía una respuesta con un mensaje de éxito
    return res.json({ connected: true, message: result.rows[0] });
  } catch (error) {
    // Si se produce un error al ejecutar la consulta, envía una respuesta con un mensaje de error
    console.error('Error al ejecutar la consulta:', error);
    return res.status(500).json({ connected: false, message: 'Error al conectar con la base de datos' });
  }
});

app.get('/crear-tabla', async (req, res) => {
  try {
    // Ejecuta una consulta para crear la tabla 'prueba'
    await pool.query('CREATE TABLE prueba (id SERIAL PRIMARY KEY, usuario VARCHAR)');
    return res.json({ success: true, message: 'Tabla creada correctamente' });
  } catch (error) {
    console.error('Error al crear la tabla:', error);
    return res.status(500).json({ success: false, message: 'Error al crear la tabla' });
  }
});

// Ruta para agregar un elemento a la tabla 'prueba'
app.get('/agregar-elemento', async (req, res) => {
  try {
    // Ejecuta una consulta para agregar un elemento a la tabla 'prueba'
    await pool.query("INSERT INTO prueba (usuario) VALUES ('Juan Prueba1')");
    return res.json({ success: true, message: 'Elemento agregado correctamente' });
  } catch (error) {
    console.error('Error al agregar elemento:', error);
    return res.status(500).json({ success: false, message: 'Error al agregar elemento' });
  }
});

app.get('/consultar-elemento', async (req, res) => {
  try {
    // Ejecuta una consulta para agregar un elemento a la tabla 'prueba'
    const resp = await pool.query("SELECT * FROM prueba");
    return res.json({ success: true, message: resp.rows });
  } catch (error) {
    console.error('Error al agregar elemento:', error);
    return res.status(500).json({ success: false, message: 'Error al consultar elemento' });
  }
});

app.listen(5432)
console.log("server port ", 5432)