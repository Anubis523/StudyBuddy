const express = require('express'), 
          app = express(),
       morgan = require('morgan'),
   bodyParser = require('body-parser'),
         path = require('path'),
    Sequelize = require('sequelize'),
        PORT = process.env.ENV || 3001

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(morgan('tiny'))

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) })