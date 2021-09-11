'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Sabão em Pó Omo Lavagem Perfeita',
        price: 16.90
      },
      { 
        name: 'Leite Condensado Semidesnatado',
        price: 4.99
      },
      {
        name: 'Creme de Leite Integral Piracanjuba',
        price: 2.99
      },
      { 
        name: 'Leite Longa Vida Piracanjuba',
        price: 3.49
      },
      {
        name: 'Fralda Huggies',
        price: 89.90
      },
      { 
        name: 'Azeite de Oliva Gallo',
        price: 19.90
      },
      {
        name: 'Desengotdurante Cif',
        price: 13.90
      },
      { 
        name: 'Cloro Gel Vim',
        price: 11.90
      },
      {
        name: 'Repelente Full Repel',
        price: 28.48
      },
      { 
        name: 'Shampoo Banho de Verniz',
        price: 27.99
      },
      {
        name: 'Detergente Líquido Ypê',
        price: 2.19
      },
      { 
        name: 'Bolacha Recheada de Chocolate Passatempo',
        price: 1.98
      },
      {
        name: 'Kit com 12 canetas Fine Line',
        price: 27.81
      },
      { 
        name: 'Pasta Suspensa Marmorizada Frama',
        price: 1.58
      },
      {
        name: 'Mochila Cavalera Escola Feminina Moderna',
        price: 149.90
      },
      { 
        name: 'Papel A4 Chamex com 500 folhas',
        price: 16.74
      },
      {
        name: 'Caderno inteligente grande arco íris pastel',
        price: 100.42
      }
      
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
