'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tracker', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.INTEGER',
         
      },
      
      
      
      "visible": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "user_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "user_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "module_name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "item_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "item_summary": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "action": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "session_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "monitor_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "monitor_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tracker');
  }
};
