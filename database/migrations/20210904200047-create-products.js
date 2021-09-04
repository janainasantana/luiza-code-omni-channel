'use strict'
module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Products', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      price: {
        type: DataTypes.DOUBLE,
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
    return queryInterface.dropTable('Products')
  }
}
