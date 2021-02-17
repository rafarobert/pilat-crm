'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('oauth2clients', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "is_confidential": {
        type: 'Sequelize.TINYINT'
      },
      
      
      "duration_value": {
        type: 'Sequelize.INTEGER',
        length: 4,
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
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('oauth2clients');
  }
};
