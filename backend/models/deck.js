'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
    Deck.belongsTo(models.User, { foreignKey: 'UserId'})
    Deck.hasMany(models.FlashCard, {as: 'FlashCards'})
  };
  return Deck;
};