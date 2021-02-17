'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('config', {


      
      
      
      
      
      
      
      "category": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "name": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "category": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "value": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('config');
  }
};