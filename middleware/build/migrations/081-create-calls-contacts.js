'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('calls_contacts', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "call_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "call_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "contact_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "required": {
        type: 'Sequelize.STRING',
        length: 1
      },
      
      "accept_status": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('calls_contacts');
  }
};