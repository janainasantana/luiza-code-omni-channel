'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazine Luiza - loja 01',
        address: 'R. Sete de Setembro, 100 - Centro, Caçapava - SP'
      },
      { 
        name: 'Magazine Luiza - loja 02',
        address: 'Rua Doutor Lúcio Malta, 478 ala A - Centro, Jacareí - SP'
      },
      {
        name: 'Magazine Luiza - loja 03',
        address: 'R. Nossa Sra. da Glória, 588 - Centro, Tremembé - SP'
      },
      {
        name: 'Magazine Luiza - loja 04',
        address: 'Praça José Avelino de Oliveira - Vila Lucia, São José dos Campos - SP'
      },
      { 
        name: 'Magazine Luiza - loja 05',
        address: 'Rod. Pres. Dutra, Km 207 - Água Chata, Guarulhos - SP'
      },
      {
        name: 'Magazine Luiza - loja 06',
        address: 'Portal das Colinas, Guaratinguetá - SP'
      },
      { 
        name: 'Magazine Luiza - loja 07',
        address: 'R. Dr. Deodato Wertheimer, 1374/1394 - Centro, Mogi das Cruzes - SP'

      },
      {
        name: 'Magazine Luiza - loja 08',
        address: 'R. Doutor Lucio Malta Quiosque Ala A Quiosque - Centro, Jacareí - SP'
      },
      { 
        name: 'Magazine Luiza - loja 09',
        address: 'Estr. do Lageado Velho, 821 - Guaianases, São Paulo - SP'

      },
      {
        name: 'Magazine Luiza - loja 10',
        address: 'Pc. Olinto da Fonseca, 74 - Centro, Extrema - MG'
      },
      { 
        name: 'Magazine Luiza - loja 11',
        address: 'Avenida Marechal Tito, 468 - São Miguel Paulista, São Paulo - SP'
      },
      {
        name: 'Magazine Luiza - loja 12',
        address: 'Avenida Marechal Tito, 4459 - Itaim Paulista, São Paulo - SP'
      },
      { 
        name: 'Magazine Luiza - loja 13',
        address: 'R. Dom Pedro II, 369 - Centro, Guarulhos - SP'
      },
      {
        name: 'Magazine Luiza - loja 14',
        address: 'Av. Antártica, 380 - Água Branca, São Paulo - SP'
      },
      { 
        name: 'Magazine Luiza - loja 15',
        address: 'R. Silva Bueno, 2342 - Ipiranga, São Paulo - SP'
      },
      {
        name: 'Magazine Luiza - loja 16',
        address: 'Av. Bosque da Saúde, 138 - Vila da Saúde, São Paulo - SP'
      },
      { 
        name: 'Magazine Luiza - loja 17',
        address: 'Av. Italo Adami, 660 - Vila Zeferina, Itaquaquecetuba - SP'
      },
      {
        name: 'Magazine Luiza - loja 18',
        address: 'Av. Quinze de Novembro, 102 - Centro, Ferraz de Vasconcelos - SP'
      },
      { 
        name: 'Magazine Luiza - loja 19',
        address: 'Av. Tucuruvi, 181 - Tucuruvi, São Paulo - SP'
      },
      {
        name: 'Magazine Luiza - loja 20',
        address: ' R. Gen. Glicério, 145 - Centro, Santo André - SP'
      },
      { 
        name: 'Magazine Luiza - loja 21',
        address: 'Av. Cruzeiro do Sul, 1100 - Canindé, São Paulo - SP'
      },
      {
        name: 'Magazine Luiza - loja 22',
        address: 'R. Amazonas da Silva, 27 - Vila Guilherme, São Paulo - SP'
      },
      { 
        name: 'Magazine Luiza - loja 23',
        address: 'Av. Itaberaba, 2023 - Freguesia do Ó, São Paulo - SP'
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};