'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aow_processed_aow_actions', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "aow_processed_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "aow_processed_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "aow_action_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aow_processed_aow_actions');
  }
};
