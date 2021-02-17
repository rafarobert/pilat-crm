'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emails', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "orphaned": {
        type: 'Sequelize.TINYINT'
      },
      
      "flagged": {
        type: 'Sequelize.TINYINT'
      },
      
      "reply_to_status": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "message_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "intent": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "parent_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "uid": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "category_id": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "last_synced": {
        type: 'Sequelize.DATE'
      },
      
      "date_sent_received": {
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
      
      "mailbox_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emails');
  }
};
