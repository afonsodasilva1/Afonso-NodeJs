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
    
    async store(req, res){
       const row = await SelecaoRepository.create
    }

    async update(req, res){
       const row = await SelecaoRepository.update(req.body, req.params.id)
       res.json(row)
    }

    async delete(req, res){
        const row = await SelecaoRepository.delete(req.params.id)
        res.json(row)
    }
}

export default new SelecaoController()
