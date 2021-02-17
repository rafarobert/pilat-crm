'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('custom_fields', {


      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "set_num": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "set_num": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "bean_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "bean_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field0": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field1": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field2": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field3": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field4": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field5": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field6": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field7": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field8": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "field9": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('custom_fields');
  }
};
