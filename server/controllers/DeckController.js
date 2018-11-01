const Deck = require('../models').Deck,
 FlashCard = require('../models').FlashCard

// remember to call them and then .then after the callback sequelize uses promises
 module.exports = {
   index(){
     return Deck.findAll()
   },
   myDecks(user_id){
     return Deck.findAll({
       where: {
         user_id: user_id
       }
      })
   },
   createFlashCard(question, answers, rightAnswer, type, deck_id){
    return FlashCard.create({question, answers, rightAnswer, type, timesCorrect: 0, timesAttempted: 0, deck_id})
  },
  myCards(deck_id){
    return Deck.findById(deck_id).flashCards // this might not work
  }
 }
