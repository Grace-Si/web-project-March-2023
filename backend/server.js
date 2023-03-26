//npm i express cors axios json-server
//npm i nodemon -D
const express = require("express");
const cors = require('cors')
const router = require('./routes/index.js')
const app = express()
app.use(cors());
app.use(express.json());
app.use('/api',router);


app.listen(80, function(req,res) {
    console.log("Server is running on http://localhost:80");

})