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

        update(id, bodyReq){
            const sqlComand = 'UPDATE selecao SET ? WHERE id'
        }

        delete(){
            
        }
}

export default new SelecaoRepository()

