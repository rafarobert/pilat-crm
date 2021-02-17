'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_templates', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "text_only": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "created_by": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "created_by": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "published": {
        type: 'Sequelize.STRING',
        length: 3
      },
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "subject": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "body": {
        type: 'Sequelize.TEXT',
      },
      
      "body_html": {
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
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_templates');
  }
};
