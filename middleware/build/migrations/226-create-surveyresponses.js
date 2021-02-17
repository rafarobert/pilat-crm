'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('surveyresponses', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "email_response_sent": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "happiness": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "happiness": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      "name": {
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
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "account_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "contact_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "survey_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('surveyresponses');
  }
};
