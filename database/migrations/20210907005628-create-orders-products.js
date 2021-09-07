'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    
    queryInterface.createTable('OrdersProducts', {
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
  })
},
  down: async (queryInterface) => {
    return queryInterface.dropTable('OrdersProducts')
  }
};
