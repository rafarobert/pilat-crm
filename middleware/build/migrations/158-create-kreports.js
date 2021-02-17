'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kreports', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "category_priority": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "category_priority": {
        type: 'Sequelize.INTEGER',
        length: 6,
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "report_module": {
        type: 'Sequelize.STRING',
        length: 45
      },
      
      "report_status": {
        type: 'Sequelize.STRING',
        length: 1
      },
      
      "listtype": {
        type: 'Sequelize.STRING',
        length: 10
      },
      
      "selectionlimit": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "union_modules": {
        type: 'Sequelize.TEXT',
      },
      
      "reportoptions": {
        type: 'Sequelize.TEXT',
      },
      
      "listtypeproperties": {
        type: 'Sequelize.TEXT',
      },
      
      "presentation_params": {
        type: 'Sequelize.TEXT',
      },
      
      "visualization_params": {
        type: 'Sequelize.TEXT',
      },
      
      "integration_params": {
        type: 'Sequelize.TEXT',
      },
      
      "wheregroups": {
        type: 'Sequelize.TEXT',
      },
      
      "whereconditions": {
        type: 'Sequelize.TEXT',
      },
      
      "listfields": {
        type: 'Sequelize.TEXT',
      },
      
      "unionlistfields": {
        type: 'Sequelize.TEXT',
      },
      
      "advancedoptions": {
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
      
      "category_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kreports');
  }
};
