'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazine Luiza loja 01',
        address: 'Rua Benevides 13'
      },
      { 
        name: 'Magazine Luiza loja 02',
        address: 'Rua Cascavel 135'

      },
      {
        name: 'Magazine Luiza loja 03',
        address: 'Rua Itaúna 32'

      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};