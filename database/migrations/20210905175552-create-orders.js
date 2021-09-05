'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {

    return queryInterface.createTable('Orders', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Status',
          key: 'id'
        },
      },
      id_client: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'id'
        },
      },
      id_store: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Stores',
          key: 'id'
        },
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
    return queryInterface.dropTable('Orders')
  }
};



