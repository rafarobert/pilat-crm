'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('project_task', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "milestone_flag": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "project_task_id": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "project_task_id": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "time_start": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "time_finish": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "duration": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "actual_duration": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "percent_complete": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "parent_task_id": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "order_number": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "task_number": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "estimated_effort": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "actual_effort": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "utilization": {
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
      
      "status": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "relationship_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "priority": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "predecessors": {
        type: 'Sequelize.TEXT',
      },
      
      "duration_unit": {
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
      
      "date_finish": {
        type: 'Sequelize.DATE'
      },
      
      "date_due": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "project_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "project_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
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
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('project_task');
  }
};
