const User = require('../models').User,
      Deck = require('../models').Deck,
 FlashCard = require('../models').FlashCard

 module.exports = {
   index(){
     return User.findAll()
   },
   createDeck(deckObj, userId){
     const { name } = deckObj
     const description = deckObj.description ? deckObj.description : "Description forthcoming..."
     const newDeck = Deck.build({ name, description})
     newDeck.UserId = userId
     return newDeck.save()
   },
   show(id){
     return User.findByPk(id)
   },
   createUser(user){
     const { username, email, password } = user
     return User.create({ username, email , password })
   },
   getDecks(id){
     return User.findByPk(id)
     .then(user => user.getDecks())
   },
   getCardPool(id){
     return Deck.findOne({
       where: {
         UserId: id,
         name: "CardPool"
       }
     })

   }
 }