const Deck = require('../models').Deck,
 FlashCard = require('../models').FlashCard,
      User = require('../models').User,
Sequelize = require('sequelize')
       Op = Sequelize.Op

// remember to call them and then .then after the callback sequelize uses promises
 module.exports = {
  index(){
    return Deck.findAll({
      where: {
        name: {
          [Op.not]: "CardPool"
        }
      }
    })
  },
  getUser(id){
    return Deck.findByPk(id)
    .then(deck => User.findByPk(deck.UserId))
  },
  createFlashCard(flashCardObj, deckId){
    const { question, answers, rightAnswer, type } = flashCardObj
    const DeckId = deckId
    return FlashCard.create({question, answers, rightAnswer, type, timesCorrect: 0, timesAttempted: 0, DeckId})
  },
  getFlashCards(id){
    return Deck.findByPk(id)
    .then(deck => {
      deck.getFlashCards()
    })
  },
  show(id){
    return Deck.findByPk(id)
  },
  getFlashCards(id){
    return Deck.findByPk(id)
    .then(deck => deck.getFlashCards())
  }
  ,
  editDeck(id, deckChangesObj){
    return Deck.findByPk(id)
    .then(editDeck => {
      const { name, description, UserId } = deckChangesObj
      editDeck.set({ name, description, UserId })
      return editDeck.save() // *WIP: this is where you validate basically or should have written a validate into the model to begin w/ dummy!
    })
  },
  removeDeck(id){
    return Deck.findByPk(id)
    .then(deck => deck.destroy())
  }
 }
