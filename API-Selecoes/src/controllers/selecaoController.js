import conection from '../models/conexao.js'

class SelecaoController{
    index(req, res){
        const sqlCommand = 'SELECT *  FROM selecao'    
        conection.query(sqlCommand, (erro, result) =>{
            if(erro){
                res.status(404).json({'erro': erro})
            }else{
                res.status(200).json({'resultado': result})
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
                res.status(200).json({'resultado':result})
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
        const selecao   = req.body
        const id        = req.params.id
        const sqlComand = 'UPDATE selecoes SET ? WHERE id = ?'

        conection.query(sqlComand, [selecao, id], (erro, result) =>{
            if(erro)
                res.status(400).json({'erro': erro})
            else
                res.status(200).json({'resultado': result})
        })
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
