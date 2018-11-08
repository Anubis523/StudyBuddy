  const express = require('express'), 
           cors = require('cors'),
            app = express(),
         morgan = require('morgan'),
     bodyParser = require('body-parser'),
           path = require('path'),
      Sequelize = require('sequelize'),
     userRouter = require('../router/UserRouter'),
     deckRouter = require('../router/DeckRouter'),
flashCardRouter = require('../router/FlashCardRouter'),
     authRouter = require('../router/Auth')

app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('tiny'));

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/decks', deckRouter)
app.use('/flashCards', flashCardRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });