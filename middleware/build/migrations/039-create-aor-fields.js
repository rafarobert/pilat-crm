'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aor_fields', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "display": {
        type: 'Sequelize.TINYINT'
      },
      
      "link": {
        type: 'Sequelize.TINYINT'
      },
      
      "group_by": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "field_order": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "group_display": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "label": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field_function": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "sort_by": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "format": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "total": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "sort_order": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "group_order": {
        type: 'Sequelize.STRING',
        length: 100
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
    return queryInterface.dropTable('aor_fields');
  }
};
