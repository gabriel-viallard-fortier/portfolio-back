import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import AppError from '../errors/AppError.js'
import { colorize } from '../utils/Colorize.js'

/**
 * Configuration des variables d'environnement.
 *
 * */
dotenv.config()
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env
if (!DB_HOST || !DB_USER || !DB_NAME || !DB_PORT) {
  console.error(
    colorize('Missing required environment variables for database connection.')
      .red
  )
  process.exit(1)
}

/**
 * Configuration du pool de connexions MySQL.
 * Ce pool gère les connexions à la base de données en fonction des variables d'environnement.
 */
const pool = mysql.createPool({
  host: DB_HOST || 'localhost',
  user: DB_USER || 'root',
  password: DB_PASSWORD || '',
  database: DB_NAME || 'db',
  port: Number(DB_PORT || 3333),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Gestion des erreurs lors de la connexion au pool
const connect = async () => {
  try {
    await pool.getConnection()
    console.log(colorize(`Connexion réussie à ${DB_NAME}`).green)
  } catch (error) {
    throw new AppError('Échec de la connexion au pool MySQL', 500)
  }
}

export default { pool, connect }
