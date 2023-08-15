import express from 'express'
import conection from './models/conexao.js';

const app = express()
app.use(express.json())

//Rotas
app.get('/showSelecoes', (req, res) => {
    const sqlCommand = 'SELECT *  FROM selecao'    
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
    const sqlCommand = 'SELECT * FROM selecao WHERE id = ?'
    
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
    const selecao = req.body
    const sqlCommand = 'INSERT INTO selecao SET ?'
    conection.query(sqlCommand, selecao, (erro, result) =>{
        if(erro){
            res.status(404).json({'erro':erro})
        }else{
            res.status(201).json(result)
        }
    })
})

app.put('/updateSelecao/:id', (req, res) =>{
    const id = req.params.id
    const selecao = req.body
    const sqlCommand = 'UPDATE selecao SET ? WHERE id = ?'

    conection.query(sqlCommand, [selecao, id], (erro, result) =>{
        if(erro){
            res.status(400).json({'erro':erro})
        }else{
            res.status(200).json(result)
        }
    })
})

app.delete('/deleteSelecao/:id', (req, res) => {
    const id = req.params.id
    const sqlCommand = 'DELETE FROM selecao WHERE id = ?'

    conection.query(sqlCommand, id, (erro, result) =>{
        if(erro){
            res.status(400).json({'erro': erro})
        }else{
            res.status(200).json(result)
        }
    })
})

export default app
