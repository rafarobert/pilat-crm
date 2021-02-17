'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reminders', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "popup": {
        type: 'Sequelize.TINYINT'
      },
      
      "email": {
        type: 'Sequelize.TINYINT'
      },
      
      "email_sent": {
        type: 'Sequelize.TINYINT'
      },
      
      "popup_viewed": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "date_willexecute": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "date_willexecute": {
        type: 'Sequelize.INTEGER',
        length: 60,
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "timer_popup": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "timer_email": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "related_event_module": {
        type: 'Sequelize.STRING',
        length: 32
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
      
      "related_event_module_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reminders');
  }
};
