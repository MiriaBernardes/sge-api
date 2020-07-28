const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    user: {
        email: {
            type: String,
            required: true
        },
        password: String
    }
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;