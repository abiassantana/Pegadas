'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      notEmpty: {msg: "Campo nome obrigatorio"},
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      notEmpty: {msg: "Campo descricao obrigatorio"},
      allowNull: false
    },
    gameFiles: {
      type: DataTypes.BLOB('long'),
      notEmpty: {msg: "Voce esqueceu de adicionar o arquivo"},
      allowNull: false
    },
    gamePhoto: {
      type: DataTypes.BLOB('long'),
    },
    tags: {
      type: DataTypes.STRING,
      notEmpty: {msg: "Voce esqueceu de adicionar a classificacao"},
      allowNull: false
    },
    developer: {
      type: DataTypes.INTEGER,
      references: {model: 'Developer', key: 'id'},
      onDelete: 'CASCADE',
      allowNull: false
    }
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    //Game.hasOne(models.developer, {
    //  as: "developerId"
    //});
  };
  return Game;
};