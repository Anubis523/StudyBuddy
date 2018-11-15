const router = require('express').Router()
const User = require('../models').User
const jwt = require('jsonwebtoken')
// const secret = require('../config/secret')

router
  .post('/login', (req, res, next) => {
    User.findOne(
      {
        where: {
          username: req.body.user.username
        }
      }
    ).then(user => {
      if (!user){
        res.status(401).send('User could not be found')
      } else if (!user.validPass(req.body.user.password)) {
        res.status(401).send('Invalid password')
      } else {
        // res.json(user)
        jwt.sign({ user }, 'secret', {expiresIn: '5m'}, (err, token) => {
          if(token) {
            res.json({ token, user })
          } else {
            res.status(403).json(err)
          }
        })
      }
    })
    .catch(next)
  })

  module.exports = router
