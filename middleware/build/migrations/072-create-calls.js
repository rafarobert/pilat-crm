'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('calls', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "email_reminder_sent": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "duration_hours": {
        type: 'Sequelize.INTEGER',
        length: 2,
      },
      
      "duration_minutes": {
        type: 'Sequelize.INTEGER',
        length: 2,
      },
      
      "reminder_time": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "email_reminder_time": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "repeat_interval": {
        type: 'Sequelize.INTEGER',
        length: 3,
      },
      
      "repeat_count": {
        type: 'Sequelize.INTEGER',
        length: 7,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "parent_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "direction": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "outlook_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "repeat_type": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "repeat_dow": {
        type: 'Sequelize.STRING',
        length: 7
      },
      
      "recurring_source": {
        type: 'Sequelize.STRING',
        length: 36
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
      
      "date_start": {
        type: 'Sequelize.DATE'
      },
      
      "date_end": {
        type: 'Sequelize.DATE'
      },
      
      "repeat_until": {
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
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "repeat_parent_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('calls');
  }
};
