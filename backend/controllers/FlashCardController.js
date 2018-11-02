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
  },
  checkIfCorrect(id, answerIndex){ // not yet tested do it!!
    return FlashCard.findByPk(id)
    .then(flashCard => flashCard.checkAnswer(answerIndex))
    .then(edittedFlashCard => res.json(edittedFlashCard))
  }
  // ,
  // editFlashCard(id, cardCorrectionObj){
  //   // *TODO: add logic/etc for editting an alread made flashcard
  //   return FlashCard.findByPk(id)
  //   .then(flashCard => )
  // }
}