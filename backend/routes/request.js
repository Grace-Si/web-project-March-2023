const express = require ('express');
const axios = require ('axios');
const { getRequest } = require ('../controllers/requestController')
const requestRouter = express.Router();

//get request
//http://localhost:8000/request
//api http://localhost/api/request
requestRouter.get('/', getRequest)
module.exports = requestRouter;