'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('job_queue', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "requeue": {
        type: 'Sequelize.TINYINT'
      },
      
      "retry_count": {
        type: 'Sequelize.TINYINT'
      },
      
      "failure_count": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "job_delay": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "percent_complete": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "resolution": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "target": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "client": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "message": {
        type: 'Sequelize.TEXT',
      },
      
      "data": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "execute_time": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "scheduler_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('job_queue');
  }
};
