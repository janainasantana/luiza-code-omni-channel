'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Shampoo',
        price: 7.5
      },
      { 
        name: 'Chocolate',
        price: 11
      },
      {
        name: 'Condicionador',
        price: 12.5
      }
      
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
