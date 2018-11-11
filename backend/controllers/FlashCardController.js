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
    .then(flashCard => {
      let deckId = flashCard.DeckId
      flashCard.destroy()
      return deckId
    }).then(deckID => FlashCard.findAll({
      where: {
        DeckId: deckID
      }
    }))
  },
  checkIfCorrect(id, answerIndex){ // not yet tested do it!!
    return FlashCard.findByPk(id)
    .then(flashCard => flashCard.checkAnswer(answerIndex))
    .then(edittedFlashCard => res.json(edittedFlashCard))
  },
  editCard(id, cardBody){
    return FlashCard.findByPk(id)
    .then(
      editFlashCard => {
      editFlashCard.update(cardBody)
      return editFlashCard.save()}
    )
  }
}