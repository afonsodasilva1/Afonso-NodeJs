import conection from '../models/conexao.js'

class SelecaoRepository{

        create(){
            //Bem famosa
        }

        findAll(){
            const sqlCommand = 'SELECT *  FROM selecao'    
            return new Promise((resolve, reject) =>{
                conection.query(sqlCommand, (erro, result)=>{
                    if(erro) return reject('Não foi possível')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                })
            })
        }
        findById(id){
            const sqlComand = 'SELECT * FROM selecao WHERE id =?;'
            return  new Promise((resolve, reject) =>{
                conection.query(sqlComand, id, (erro, result) =>{
                    if(erro) 
                        return reject('Não foi possível Localizar')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                })
            })
        }

        update(bodyReq, id){
            const sqlComand = 'UPDATE selecao SET ? WHERE id = ?;'
            return new Promise((resolve, reject) =>{
                conection.query(sqlComand, [bodyReq, id], (erro, result) =>{
                    if(erro)
                        return reject('Não foi possível actualizar!')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                })
            })
        }

        delete(id){
            const sqlComand = 'DELETE FORM selecao WHERE id = ?;'
            return new Promise((resolve, reject) =>{
                conection.query(sqlComand, id, (erro, result) =>{
                    if(erro)
                        return reject('Não foi possível apagar')
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                })
            })
        }
}

export default new SelecaoRepository()
