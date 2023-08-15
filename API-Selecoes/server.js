import app from "./src/app.js"
import dotenv from 'dotenv';
dotenv.config();



const PORT = process.env.DB_PORT

app.listen(PORT, () =>{
    console.log(`Servidor rodando no enderenço:http://localhost:${PORT}/showSelecoes`)
})

