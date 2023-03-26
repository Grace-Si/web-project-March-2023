const express = require ('express');
const axios = require ('axios');
const { getProfile } = require ('../controllers/profileController');
const profileRouter = express.Router();

//get profile
//json http://localhost:8000/profile
//api http://localhost/api/profile
profileRouter.get('/', getProfile);
module.exports = profileRouter;