import express from 'express'

const app = express()
app.use(express.json())

const selecoes = [
    {id:1, selecao: 'Angola', grupo:'A'},
    {id:2, selecao: 'Gabão', grupo:'A'},
    {id:3, selecao: 'França', grupo:'A'},
    {id:4, selecao: 'Argentina', grupo:'A'}
] 

function getSelecaoById(id){
    return selecoes.filter(selecao => selecao.id = id)
}

//Criando a rota padrão
app.get('/', (req, res) => {
    res.send('Hello, World!') 
})

app.get('/showSelecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/showSelecao/:id', (req, res) =>{
    res.status(200).json(getSelecaoById(req.params.id))
})

app.post('/createSelecao', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send('Seleçao cadastrada com sucesso!')
})



export default app