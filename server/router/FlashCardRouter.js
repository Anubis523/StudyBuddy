      const express = require('express'),
             router = express.Router(),
flashCardController = require('../controllers/FlashCardController')

router
  .route('/')
  .all((req, res, next) => {
    next()
  })
  .get((req, res) => {
    flashCardController.index()
    .then(flashCards => res.json(flashCards))
  })

router
  .route('/:id')
  .all((req, res, next) => {
    next()
  })
  .get((req, res) => {
    flashCardController.show(req.params.id)
    .then(flashCard => res.json(flashCard))
  })
  .delete((req, res) => {
    flashCardController.deleteFlashCard(req.params.id)
    .then(all => res.json(all))
  })

module.exports = router