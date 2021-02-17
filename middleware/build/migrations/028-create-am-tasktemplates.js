'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('am_tasktemplates', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "milestone_flag": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "percent_complete": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "percent_complete": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "predecessors": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "task_number": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "order_number": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "estimated_effort": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "duration": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "priority": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "relationship_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "utilization": {
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
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('am_tasktemplates');
  }
};
