const express = require ('express');
const axios = require ('axios');
const {getHighline} = require ('../controllers/highlineController')
const highlineRouter = express.Router();

//get highline
//api http://localhost/api/highline
//json http://localhost:8000/highline
highlineRouter.get('/', getHighline);

module.exports = highlineRouter;