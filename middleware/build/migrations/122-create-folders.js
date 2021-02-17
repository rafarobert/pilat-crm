'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('folders', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "has_child": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_group": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_dynamic": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "folder_type": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      "dynamic_query": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      
      
      "parent_folder": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "assign_to_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "modified_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('folders');
  }
};
