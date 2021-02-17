'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fields_meta_data', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      "required": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "audited": {
        type: 'Sequelize.TINYINT'
      },
      
      "massupdate": {
        type: 'Sequelize.TINYINT'
      },
      
      "reportable": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "len": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "vname": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "comments": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "help": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "custom_module": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "default_value": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "importable": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "ext1": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "ext2": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "ext3": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "ext4": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fields_meta_data');
  }
};
