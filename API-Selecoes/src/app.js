import express from 'express'

const app = express()

const selecoes = [
    {id:1, selecao: 'Angola', grupo:'A'},
    {id:2, selecao: 'Gabão', grupo:'A'},
    {id:3, selecao: 'França', grupo:'A'},
    {id:4, selecao: 'Argentina', grupo:'A'},

] 

//Criando a rota padrão
app.get('/', (req, res) => {
    res.send('Hello, World!') 
})

app.get('/showSelecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.post('/createSelecao', (req, res) =>{
    selecoes.push(req.body)
    res.send('Seleçao cadastrada com sucesso!')
})

export default app