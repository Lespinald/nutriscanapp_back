import { Pool } from "pg";

// Configura la conexión a la base de datos en Render
const pool = new Pool({
  user: 'nutriscan_db_user',
  host: 'nutriscanapp-back.onrender.com',
  database: 'nutriscan_db',
  password: 'tu_contraseña_de_la_base_de_datos',
  port: 5432,
  ssl: true // Asegúrate de que esto esté configurado correctamente si Render requiere SSL
});

// Realiza la consulta 'SELECT NOW()'
pool.query('SELECT NOW()', (error, result) => {
  if (error) {
    console.error('Error al ejecutar la consulta:', error);
  } else {
    console.log('Resultado de la consulta:', result.rows);
  }
  
  // Cierra la conexión con la base de datos
  pool.end();
});