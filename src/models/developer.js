'use strict';
module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('Developer', {
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Campo nome nao pode ser vazio"},
      }

    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Campo sobre nome nao pode ser vazio"},
      }

    },
    userName: {
      type:DataTypes.STRING,
      validade :{
        isEmail: {msg: "Digite um e-mail valido"},
        notEmpty: {msg: "Campo usuario nao pode ser vazio"},
      },

    },
    email: {
      type:DataTypes.STRING,
      validade :{
        isEmail: true,
        notEmpty: {msg: "Campo e-mail nao pode ser vazio"},
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo senha nao pode ser vazio"
        },
      }

    }
  }, {});
  Developer.associate = function(models) {
    // associations can be defined here
  };
  return Developer;
};