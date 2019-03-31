'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        notEmpty: {msg: "Campo nome obrigatorio"},
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        notEmpty: {msg: "Campo descricao obrigatorio"},
        allowNull: false
      },
      gameFiles: {
        type: Sequelize.BLOB('long'),
        notEmpty: {msg: "Voce esqueceu de adicionar o arquivo"},
        allowNull: false
      },
      gamePhoto: {
        type: Sequelize.BLOB('long'),
      },
      tags: {
        type: Sequelize.STRING,
        notEmpty: {msg: "Voce esqueceu de adicionar a classificacao"},
        allowNull: false
      },
      developer: {
        type: Sequelize.INTEGER,
        references: {model: 'Developers', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};