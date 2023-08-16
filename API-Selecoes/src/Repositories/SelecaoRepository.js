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
                    return resolve(result)
                })
            })
        }
        findById(){

        }

        update(){

        }
}

export default new SelecaoRepository()
