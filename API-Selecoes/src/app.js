import express from 'express'

const app = express()

//Criando a rota padrão
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

export default app