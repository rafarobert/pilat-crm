'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('linked_documents', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "parent_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "parent_type": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "document_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "document_revision_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('linked_documents');
  }
};
