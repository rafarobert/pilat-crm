'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('eapm', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "validated": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "password": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "url": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "application": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "consumer_key": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "consumer_secret": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "oauth_token": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "oauth_secret": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "api_data": {
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
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('eapm');
  }
};
