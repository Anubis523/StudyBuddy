const User = require('../models').User,
      Deck = require('../models').Deck,
 FlashCard = require('../models').FlashCard,
 Sequelize = require('sequelize')
        Op = Sequelize.Op
 module.exports = {
   index(){
     return User.findAll().
     then(users => {
       users.forEach(user => {
         Deck.findOrCreate({
          where: {
            UserId: user.id,
            name: "CardPool"
          }
        })
       })
       return users
     })
   },
   createDeck(deckObj, userId){
     const { name } = deckObj
     const description = deckObj.description ? deckObj.description : "Description forthcoming..."
     const newDeck = Deck.build({ name, description})
     newDeck.createdAt = Date.now()
     newDeck.updatedAt = Date.now()
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
     .then(user => {
       Deck.findOrCreate({
        where: {
          UserId: user.id,
          name: "CardPool"
        }
      })
       return user.getDecks({
         where: {
           name: {
             [Op.not]: "CardPool"
           }
         }
       })
      })
   },
   browseOthersDecks(id){
     return Deck.findAll({
       where: {
         UserId: {
           [Op.not]: id
         },
         name: {
           [Op.not]: "CardPool"
         }
       }
     })
   },
   getAllCardPools(){ //just here for debugging purposes
    return Deck.findAll({
      where: {
        name: "CardPool"
      }
    })
   },
   getCardPool(id){
     return Deck.findOrCreate({
       where: {
         UserId: id,
         name: "CardPool"
       }
     })
     .then(array => array[0])
   },
   editUser(userObj, id){
     return User.findByPk(id)
     .then(user => {
       const { username, email, password } = userObj
       user.set({username, email, password }) // *NOTE: add some sort confirmation thingie especially for the password!!
       return user.save()
     })
   },
   removeUser(id){
     return User.findByPk(id)
     .then(user => user.destroy())
   }
 }