import mysql from 'mysql'

const conection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'caf'
})

conection.connect()

export default conection
