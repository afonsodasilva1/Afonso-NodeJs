import app from "./src/app.js"
const dot = require('dotenv').config()

const PORT = 3003

app.listen(PORT, () =>{
    console.log(`Servidor rodando no enderenço:http://localhost:${PORT}/showSelecoes`)
})
