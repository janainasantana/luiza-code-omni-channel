'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {

    return queryInterface.createTable('Orders', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      id_client: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_store: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    })
  },


  down: async queryInterface => {
    return queryInterface.dropTable('Ordes')
  }
};



