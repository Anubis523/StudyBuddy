const express = require('express'),
       router = express.Router(),
       deckController = require('../controllers/DeckController')

router
  .route('/')
  .all((req, res, next) => {
    next()
  })
  .get((req, res) => {
    deckController.index()
    .then(decks => res.json(decks))
  })

router
  .route('/:id/user')
  .all((req, res, next) => {
    next()
  })
  .get((req, res) => {
    deckController.getUser(req.params.id)
    .then(user => res.json(user))
  })

router
  .route('/:id/flashCards')
  .all((req, res, next) => {
    next()
  })
  .get((req, res) =>  {
    deckController.getFlashCards(req.params.id)
    .then(flashCards => res.json(flashCards))
  })
  .post((req, res) => {
    deckController.createFlashCard(req.body.flashCard, req.params.id)
    .then(newFlashCard => res.json(newFlashCard))
  })

router
  .route('/:id')
  .all((req, res, next) => {
    next()
  })
  .get((req, res) => {
    deckController.show(req.params.id)
    .then(deck => res.json(deck))
  })

  module.exports = router