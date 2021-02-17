'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advancedreports_schedule_g', {


      
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
      
      "group": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      
      
      
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('advancedreports_schedule_g');
  }
};
