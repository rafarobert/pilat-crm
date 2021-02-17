'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('documents', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_template": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "document_name": {
        type: 'Sequelize.STRING',
        length: 255
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
      
      "document_revision_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "template_type": {
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
      
      "related_doc_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "related_doc_rev_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('documents');
  }
};
