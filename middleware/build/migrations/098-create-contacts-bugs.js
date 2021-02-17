'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contacts_bugs', {


      
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
      
      "bug_id": {
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
    return queryInterface.dropTable('contacts_bugs');
  }
};