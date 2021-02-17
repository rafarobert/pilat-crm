'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aow_workflow', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "multiple_runs": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "flow_module": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "flow_run_on": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "run_when": {
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
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aow_workflow');
  }
};
