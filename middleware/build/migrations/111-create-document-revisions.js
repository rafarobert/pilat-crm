'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('document_revisions', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "change_log": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "document_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "doc_id": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "doc_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "doc_url": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "filename": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "file_ext": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "file_mime_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "revision": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('document_revisions');
  }
};
