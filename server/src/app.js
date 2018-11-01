  const express = require('express'), 
            app = express(),
         morgan = require('morgan'),
     bodyParser = require('body-parser'),
           path = require('path'),
      Sequelize = require('sequelize'),
     userRouter = require('../router/UserRouter'),
     deckRouter = require('../router/DeckRouter'),
flashCardRouter = require('../router/FlashCardRouter')

const PORT = process.env.ENV || 3001
  

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('tiny'));
app.use('/users', userRouter)
app.use('/decks', deckRouter)
app.use('/flashCards', flashCardRouter)

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });