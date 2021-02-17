'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aop_case_updates_audit', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      
      
      
      
      
      
      "created_by": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "field_name": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "data_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "before_value_string": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "after_value_string": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "before_value_text": {
        type: 'Sequelize.TEXT',
      },
      
      "after_value_text": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_created": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aop_case_updates_audit');
  }
};
