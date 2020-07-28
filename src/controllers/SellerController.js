const express = require('express');
const Seller = require('../db/schemas/Seller'); 
const { request, response } = require('express');

const sellerRouter = express.Router()


sellerRouter.get('/', async (request, response) => {
    var sellers = await Seller.find();

    if(sellers.length > 0) {
        response.status(200).json(sellers);
    }else {
        response.status(404).json({message: "Nenhum dado encontrado"})
    }

})

sellerRouter.get('/:username', async (request, response) => {
    var username = request.params.username;
    var seller = await Seller.findOne({ "user.username": username})

    if(seller != null && seller != undefined) {
        response.status(200).json(seller);
    }else {
        response.status(404).json({message: `não foi encontrado um vendedor com o usuário: ${username}`})
    }
})

sellerRouter.post('/', async(request, response) => {
    const sellerBody = request.body;

    if(sellerBody != undefined  && sellerBody != null) {
        const seller = new Seller(sellerBody);
        seller.save()
        .then(() => {
            response.status(200).json(seller)
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        });
    }else  {
        response.status(400).json({message: "faltou mandar o body"})
    }
   
})


sellerRouter.put('/:id', async(request, response) => {
    const sellerBody = request.body;
    const id = request.params.id;

    if( sellerBody && Object.keys(sellerBody).length > 0  ) {
        
        var documentUpdated = await Seller.updateOne({_id: id}, sellerBody);
        
        if(documentUpdated.nModified > 0) {
            response.status(200).json({message: "o documento foi atualizado com sucesso"})
        }else {
            response.status(500).json({message: "Não foi possível atualizar"})
        }
    } else {
        response.status(400).json({message: "Faltou o body"})
    }
})


sellerRouter.delete('/:id', async(request, response) => {
    const id = request.params.id;
    var documentDeleted = await Seller.deleteOne({_id: id})
    
    if(documentDeleted.deletedCount > 0) {
         response.status(200).json({message: "o documento foi deletado com sucesso"})
    }else {
        response.status(500).json({message: "Não foi possível deleta o documento"})
    }
})

module.exports = sellerRouter; 