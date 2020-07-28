const express = require('express')
const sellerController = require('./controllers/SellerController')

const routes = express.Router();

routes.use('/seller', sellerController)


module.exports = routes;