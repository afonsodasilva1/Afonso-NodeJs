import mysql from 'mysql'
import dotenv from 'dotenv';

dotenv.config()

const conection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: process.en
})

conection.connect()

export default conection
