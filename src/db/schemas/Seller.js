const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        username: String,
        password: String
    }
})

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;