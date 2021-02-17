'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emailman', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.INTEGER',
         
      },
      
      
      
      "in_queue": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "related_confirm_opt_in": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "send_attempts": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "send_attempts": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "related_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "related_type": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "send_date_time": {
        type: 'Sequelize.DATE'
      },
      
      "in_queue_date": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "marketing_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "list_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "related_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emailman');
  }
};
