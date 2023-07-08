import mysql from 'mysql'
import dotenv from 'dotenv';
dotenv.config()

const conection = mysql.createConnection({
    host: process.dotenv.DB_HOST,
    port: '3306',
    user: 'root',
    password: '',
    database: 'caf'
})

conection.connect()

export default conection
