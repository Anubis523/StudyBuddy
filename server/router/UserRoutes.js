const express = require('express'),
          app = express(),
       router = express.Router(),
       userController = require('../controllers/UserController')

router
  .route('/') // the '/users' route
  .all((req, res, next) => {
    next()
  })
  .get((req, res, next) => {
    userController.index()
    .then(users => res.json(users))
  })
  .post((req, res, next) => {
    console.log(req.body)
    userController.createUser(req.body.user)
    .then(user => res.json(user))
  })

  module.exports = router

