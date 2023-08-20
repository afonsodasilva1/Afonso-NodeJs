import conection from '../models/conexao.js'
import SelecaoRepository from '../Repositories/SelecaoRepository.js'

class SelecaoController{
    async index (req, res){
       const row = await SelecaoRepository.findAll()
       res.json(row)
    }
    
    async show(req, res){
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        res.json(row)
    } 
    
    store(req, res){
        const selecao = req.body
        const sqlComand = 'INSERT INTO selecao SET ?;'
        conection.query(sqlComand, selecao, (erro, result) =>{
            if(erro)
                res.status(404).json({'erro':erro})
            else
                res.status(201).json({'result': result})
        })
    }

    async update(req, res){
       const row = await SelecaoRepository.update(req.body, req.params.id)
       res.json(row)
    }

    delete(req, res){
        const id = req.params.id
        const sqlComand = 'DELETE FROM selecao WHERE id = ?'

        conection.query(sqlComand, id, (erro, result) =>{
            if(erro)
                res.status(400).json({'erro': erro})
            else
                res.status(200).json({'resultado': result})
        })
    }
}

export default new SelecaoController()
