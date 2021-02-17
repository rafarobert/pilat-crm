'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advancedreports_schedule', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.INTEGER',
        
						references: {
		          model: {tableName:'advancedreports'},
		          key: 'id',
		        },
		        onUpdate: 'CASCADE', 
		        onDelete: 'SET NULL'
      },
      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.INTEGER',
         
      },
      
      
      
      
      "interval": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "interval": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "interval_options": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "interval_options": {
        type: 'Sequelize.STRING',
        length: 5
      },
      
      "time": {
        type: 'Sequelize.STRING',
        length: 5
      },
      
      
      
      
      "nexttime": {
        type: 'Sequelize.DATE'
      },
      
      
      "formats": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "emails": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('advancedreports_schedule');
  }
};
