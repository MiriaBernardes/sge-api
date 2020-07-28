const express = require('express')
require('./db/dbConnect');

const app = express();

app.use(express.json())

app.use(require('./routes'))

app.listen(3000, () => {
    console.log('Server running on port 3000')
})