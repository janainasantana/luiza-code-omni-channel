'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Status', [
      {
        id: 1,
        name: 'CREATED',
      },
      {
        id: 2,
        name: 'FINISHED',
      },
      {
        id: 3,
        name: 'WITHDRAWAL',
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Status', null, {});
  }
};