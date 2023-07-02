import app from "./src/app.js"
import conection from "./infra/conexao.js"

const PORT = 3000

conection.connect((error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('Conexão efectuada com sucesso!')
            }
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando no enderenço:http://localhost:${PORT}`)
})
