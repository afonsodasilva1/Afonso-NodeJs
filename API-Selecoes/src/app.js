import express from 'express'
import SelecaoController from './controllers/SelecaoController.js'

const app = express()
app.use(express.json())

//Rotas
app.post('/createSelecao', SelecaoController.store)

app.get('/showSelecoes', SelecaoController.index) 

app.get('/showSelecao/:id', SelecaoController.show)

app.put('/updateSelecao/:id', SelecaoController.update)

app.delete('/deleteSelecao/:id', SelecaoController.delete)

export default app
