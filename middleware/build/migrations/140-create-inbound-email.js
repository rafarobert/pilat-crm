'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('inbound_email', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "delete_seen": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_personal": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "port": {
        type: 'Sequelize.INTEGER',
        length: 5,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "server_url": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "email_user": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "email_password": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "service": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "mailbox_type": {
        type: 'Sequelize.STRING',
        length: 10
      },
      
      
      "mailbox": {
        type: 'Sequelize.TEXT',
      },
      
      "stored_options": {
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
        length: 36
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "template_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "group_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "groupfolder_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('inbound_email');
  }
};
