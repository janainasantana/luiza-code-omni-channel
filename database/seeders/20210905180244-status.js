'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Status', [
      {
        id: 1,
        name: 'CRIANDO',
      },
      {
        id: 2,
        name: 'REALIZADO',
      },
      {
        id: 3,
        name: 'RETIRADO',
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Status', null, {});
  }
};