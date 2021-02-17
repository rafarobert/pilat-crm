'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fp_events', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "duration_hours": {
        type: 'Sequelize.INTEGER',
        length: 3,
      },
      
      "duration_minutes": {
        type: 'Sequelize.INTEGER',
        length: 2,
      },
      
      
      
      "budget": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 5
      },
      
      "budget": {
        type: 'Sequelize.DECIMAL',
        length: 26,
        decimals: 6
      },
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "invite_templates": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "accept_redirect": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "decline_redirect": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "activity_status_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "date_start": {
        type: 'Sequelize.DATE'
      },
      
      "date_end": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "currency_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fp_events');
  }
};
