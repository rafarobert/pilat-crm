'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aor_conditions', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "parameter": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "condition_order": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "logic_op": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "parenthesis": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "operator": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "value_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "value": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "module_path": {
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
      
      "aor_report_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aor_conditions');
  }
};
