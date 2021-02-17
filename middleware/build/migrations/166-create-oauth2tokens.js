'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth2tokens', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "token_is_revoked": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "token_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "access_token": {
        type: 'Sequelize.STRING',
        length: 4000
      },
      
      "refresh_token": {
        type: 'Sequelize.STRING',
        length: 4000
      },
      
      "grant_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "state": {
        type: 'Sequelize.STRING',
        length: 1024
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
      
      "access_token_expires": {
        type: 'Sequelize.DATE'
      },
      
      "refresh_token_expires": {
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
      
      "client": {
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
    return queryInterface.dropTable('oauth2tokens');
  }
};
