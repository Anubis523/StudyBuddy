'use strict';
const Deck = require ('../models').Deck
 /*
 *TODO: Probably will have to refactor use the link below as reference, hooks don't play well w/ cli generated models
 *SEE: http://docs.sequelizejs.com/manual/tutorial/associations.html#creating-with-associations 
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, 
  {}); 

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Deck, { as: 'Decks' , onDelete: 'cascade', hooks: true })
  };

  return User;
};