'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth2clients', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_confidential": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "duration_value": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "duration_amount": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "secret": {
        type: 'Sequelize.STRING',
        length: 4000
      },
      
      "redirect_url": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "allowed_grant_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "duration_unit": {
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
    return queryInterface.dropTable('oauth2clients');
  }
};
