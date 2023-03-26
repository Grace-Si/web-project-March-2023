const express = require ('express');
const axios = require ('axios');
const { getCards, postCard, deleteCard, } = require ('../controllers/cardsController')
const cardsRouter = express.Router();

//get cards by user id
//api http://localhost/api/cards?id=1 自己的api
//json http://localhost:8000/cards?id=1 json server的api
cardsRouter.get('/', getCards);
//post a card to the user
//api http://localhost/api/cards
//json http://localhost:8000/cards
cardsRouter.post('/', postCard);
    
//delete a card by card id
//api http://localhost/api/cards/:card_id
//http://localhost/api/cards/5
cardsRouter.delete('/:card_id', deleteCard)

module.exports = cardsRouter;