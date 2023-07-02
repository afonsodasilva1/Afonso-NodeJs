import express from 'express'
import conection from '../infra/conexao.js';

const app = express()
app.use(express.json())

app.get('/showSelecoes', (req, res) => {
    const sqlCommand = 'SELECT *  FROM selecao;'    
    conection.query(sqlCommand, (erro, result) =>{
        if(erro){
            res.status(404).json({'erro': erro})
        }else{
            res.status(200).json(result)
        }
    })
})

app.get('/showSelecao/:id', (req, res) =>{
    const id = req.params.id
    const sqlCommand = 'SELECT * FROM selecao WHERE id = ?;'
    
    conection.query(sqlCommand, id, (erro, result) =>{
        const row = result[0]
        if(erro){
            res.status(404).json({'erro': erro})
        }else{
            res.status(200).json(row)
        }
    })
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