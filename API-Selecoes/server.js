import app from "./src/app.js"
import dotenv from 'dotenv'



const PORT = 3003

app.listen(PORT, () =>{
    console.log(`Servidor rodando no enderenço:http://localhost:${PORT}/showSelecoes`)
})
