'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advancedreports_categories', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.INTEGER',
         
      },
      
      
      
      
      "parent_id": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "parent_id": {
        type: 'Sequelize.INTEGER',
        length: 19,
      },
      
      "sequence": {
        type: 'Sequelize.INTEGER',
        length: 10,
      },
      
      "visible": {
        type: 'Sequelize.INTEGER',
        length: 1,
      },
      
      
      
      
      "title": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "description": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('advancedreports_categories');
  }
};
