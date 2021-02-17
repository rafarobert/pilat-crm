'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('iad_sticky_notes', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "document_name": {
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
      
      "category_id": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "subcategory_id": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "status_id": {
        type: 'Sequelize.STRING',
        length: 100
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
      
      "active_date": {
        type: 'Sequelize.DATE'
      },
      
      "exp_date": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('iad_sticky_notes');
  }
};
