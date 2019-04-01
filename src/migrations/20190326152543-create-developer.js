'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Developers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: "Campo nome nao pode ser vazio"},
        }
  
      },
      lastName: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: "Campo sobre nome nao pode ser vazio"},
        }
  
      },
      userName: {
        type:Sequelize.STRING,
        validade :{
          isEmail: {msg: "Digite um e-mail valido"},
          notEmpty: {msg: "Campo usuario nao pode ser vazio"},
        },
  
      },
      email: {
        type:Sequelize.STRING,
        validade :{
          isEmail: {msg: "Digite um e-mail valido"},
          notEmpty: {msg: "Campo e-mail nao pode ser vazio"},
        }
      },
      password: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Campo senha nao pode ser vazio"
          },
        }
      },
      perfilPhoto: {
      type:Sequelize.BLOB('long'),
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
    return queryInterface.dropTable('Developers');
  }
};
