'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('opportunities_contacts', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "contact_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "contact_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "opportunity_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "contact_role": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('opportunities_contacts');
  }
};