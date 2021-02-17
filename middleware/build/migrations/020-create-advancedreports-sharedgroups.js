'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advancedreports_sharedgroups', {


      
      "report_id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.INTEGER',
         
      },
      
      "group_id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      
      "level": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "level": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('advancedreports_sharedgroups');
  }
};
