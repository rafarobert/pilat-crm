'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meetings', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "email_reminder_sent": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "duration_hours": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "duration_hours": {
        type: 'Sequelize.INTEGER',
        length: 3,
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
      
      "sequence": {
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
      
      "gsync_lastsync": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "name": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "location": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "password": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "join_url": {
        type: 'Sequelize.STRING',
        length: 200
      },
      
      "host_url": {
        type: 'Sequelize.STRING',
        length: 400
      },
      
      "displayed_url": {
        type: 'Sequelize.STRING',
        length: 400
      },
      
      "creator": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "external_id": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "parent_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 255
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
      
      "gsync_id": {
        type: 'Sequelize.STRING',
        length: 1024
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
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "repeat_parent_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('meetings');
  }
};