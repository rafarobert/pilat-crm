'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('documents_contacts', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "document_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "document_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "contact_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('documents_contacts');
  }
};
