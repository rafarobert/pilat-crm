'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('relationships', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "reverse": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "relationship_name": {
        type: 'Sequelize.STRING',
        length: 150
      },
      
      "lhs_module": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "lhs_table": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "lhs_key": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "rhs_module": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "rhs_table": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "rhs_key": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "join_table": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "join_key_lhs": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "join_key_rhs": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "relationship_type": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "relationship_role_column": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "relationship_role_column_value": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('relationships');
  }
};
