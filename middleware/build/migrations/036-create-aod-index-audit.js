'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aod_index_audit', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      
      
      
      
      "created_by": {
        type: 'Sequelize.STRING',
        length: 255
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
        length: 255,
        binary: false
      },
      
      "parent_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aod_index_audit');
  }
};
