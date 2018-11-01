const FlashCard = require('../models').FlashCard

module.exports = {
  index(){
    return FlashCard.findAll()
  },
  show(id){
    return FlashCard.findByPk(id)
  },
  deleteFlashCard(id){
    return FlashCard.findByPk(id)
    .then(flashCard => flashCard.destroy())
    .then(nil => FlashCard.findAll())
  }
}