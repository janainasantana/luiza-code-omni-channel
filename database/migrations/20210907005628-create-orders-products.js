'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {

    queryInterface.createTable('OrdersProducts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id'
        },
      },
      id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
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
  down: async (queryInterface) => {
    return queryInterface.dropTable('OrdersProducts')
  }
};

