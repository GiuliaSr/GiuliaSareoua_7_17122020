const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pseudo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "pseudo"
    },
    mail: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "mail"
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "pseudo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pseudo" },
        ]
      },
      {
        name: "mail",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
    ]
  });
};
