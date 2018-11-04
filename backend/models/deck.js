'use strict';
 /*
 *TODO: Probably will have to refactor use the link below as reference, hooks don't play well w/ cli generated models
 *SEE: http://docs.sequelizejs.com/manual/tutorial/associations.html#creating-with-associations 
 */
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
    Deck.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id'})
    Deck.hasMany(models.FlashCard, { as: 'FlashCards', onDelete: 'cascade', hooks: true })
  };
  return Deck;
};