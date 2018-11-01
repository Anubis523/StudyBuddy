const User = require('../models').User,
      Deck = require('../models').Deck,
 FlashCard = require('../models').FlashCard

 module.exports = {
   index(){
     return User.findAll()
   },
   createDeck(name, description='description pending...', user_id){
     return Deck.create({ name, description, user_id})
   },
   createUser(user){
     const { username, email, password } = user
     return User.create({ username, email , password }, {options: {hooks : true}})
   }
  //  ,
  //  deleteUser(user_id){
  //    let userDestroy = 
  //    return User.delet
  //  }
 }