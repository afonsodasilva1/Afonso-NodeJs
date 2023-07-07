import mysql from 'mysql'
import dotenv from 'dotenv';

dotenv.config()

const conection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: '',
    database: process.env.DATABASE
})

conection.connect()

export default conection
