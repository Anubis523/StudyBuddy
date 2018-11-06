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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
 });

app.use('/decks', deckRouter)
app.use('/flashCards', flashCardRouter)

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });