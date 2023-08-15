import conection from '../models/conexao.js'

class SelecaoController{
    index(req, res){
        const sqlCommand = 'SELECT *  FROM selecao'    
        conection.query(sqlCommand, (erro, result) =>{
            if(erro){
                res.status(404).json({'erro': erro})
            }else{
                res.status(200).json(result)
            }
        })
    }
    
    show(req, res){
        const sqlComand = 'SELECT * FROM selecao WHERE id = ?'
        const id = req.params.id
        conection.query(sqlComand, id, (erro, result) =>{
            if(erro)
                res.status(400).json({'erro': erro})
            else
                res.status(200).json(result)
        })
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

    update(req, res){
        
    }
}

export default new SelecaoController()
