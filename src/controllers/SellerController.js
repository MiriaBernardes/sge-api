const express = require('express');
const Seller = require('../db/schemas/Seller'); 

const sellerRouter = express.Router()


sellerRouter.get('/', (request, response) => {
    response.json({message: 'acessou'})
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

module.exports = sellerRouter; 