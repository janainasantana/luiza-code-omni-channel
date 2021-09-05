'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {

    queryInterface.createTable('Orders', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_client: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_store: {
        type: DataTypes.INTEGER,
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

    queryInterface.addConstraint('Orders', {
      type: 'foreign key',
      fields: ['id_client'],
      name: 'fk_id_client',
      references: {
        table: 'Clients',
        field: 'id'
      }
    })

    queryInterface.addConstraint('Orders', {
      type: 'foreign key',
      fields: ['id_status'],
      name: 'fk_id_status',
      references: {
        table: 'Status',
        field: 'id'
      }
    })

    queryInterface.addConstraint('Orders', {
      type: 'foreign key',
      fields: ['id_store'],
      name: 'fk_id_store',
      references: {
        table: 'Stores',
        field: 'id'
      }
    })

    return queryInterface
  },
  down: async queryInterface => {
    return queryInterface.dropTable('Orders')
  }
};



