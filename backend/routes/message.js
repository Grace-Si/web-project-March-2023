const express = require ('express');
const axios = require ('axios');
const { getMessage } = require ('../controllers/messageController')
const messageRouter = express.Router();

//get message
//api http:localhost/api/message
//json http://localhost:8000/message
messageRouter.get('/', getMessage);

module.exports = messageRouter;