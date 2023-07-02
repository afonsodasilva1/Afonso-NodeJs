import express from 'express'

const app = express()
app.use(express.json())

//Criando a rota padrão
app.get('/', (req, res) => {
    res.send('Hello, World!') 
})

app.get('/showSelecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/showSelecao/:id', (req, res) =>{
    res.json(getSelecaoById(req.params.id))
})

app.post('/createSelecao', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send('Seleçao cadastrada com sucesso!')
})

app.put('/updateSelecao/:id', (req, res) =>{
    const index = getSelecaoIndex(req.params.id)

    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo   = req.body.grupo

    res.status(200).send('Actualização Efectuada!')
})

app.delete('/deleteSelecao/:id', (req, res) => {
    const index = getSelecaoIndex(req.params.id)

    selecoes.splice(index, 1)
    res.send('Seleção apagada com Sucesso!')
})


export default app