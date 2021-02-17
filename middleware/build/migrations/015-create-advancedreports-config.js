'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advancedreports_config', {


      
      
      
      
      
      
      
      "key": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "key": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "value": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('advancedreports_config');
  }
};
