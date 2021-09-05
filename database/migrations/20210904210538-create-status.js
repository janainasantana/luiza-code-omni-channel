'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Status', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    })
  },

  down: async queryInterface => {
    return queryInterface.dropTable('Status')
  }
};
