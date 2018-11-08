'use strict';
const bcrypt = require('bcrypt');
// const SALT_KEY = require('../config/secret')
let saltRounds = 10
 

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
  {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashSync(user.password, saltRounds)
      }
    }
  }); 

  User.encryptPass = function (plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, saltRounds) }

  User.prototype.validPass = function (plainTextPass) {
    return bcrypt.compareSync(plainTextPass, this.password)
  }

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Deck, { as: 'Decks' , onDelete: 'cascade', hooks: true })
  };

  return User;
};