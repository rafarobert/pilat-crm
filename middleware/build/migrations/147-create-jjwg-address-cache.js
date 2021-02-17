'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jjwg_address_cache', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      "lat": {
        type: 'Sequelize.FLOAT',
        length: 4,
        decimals: 5
      },
      
      "lat": {
        type: 'Sequelize.FLOAT',
        length: 10,
        decimals: 8
      },
      
      "lng": {
        type: 'Sequelize.FLOAT',
        length: 11,
        decimals: 8
      },
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jjwg_address_cache');
  }
};
