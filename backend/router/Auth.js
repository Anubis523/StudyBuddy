const router = require('express').Router()
const User = require('../models').User

router
  .post('/login', (req, res, next) => {
    User.findOne(
      {
        where: {
          username: req.body.username
        }
      }
    ).then(user => {
      if (!user){
        res.status(401).send('User could not be found')
      } else if (!user.validPass(req.body.password)) {
        res.status(401).send('Invalid password')
      } else {
        res.json(user)
      }
    })
    .catch(next)
  })

  module.exports = router
