'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_addresses', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "invalid_email": {
        type: 'Sequelize.TINYINT'
      },
      
      "opt_out": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "email_address": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "email_address_caps": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "confirm_opt_in": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "confirm_opt_in_token": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      "confirm_opt_in_date": {
        type: 'Sequelize.DATE'
      },
      
      "confirm_opt_in_sent_date": {
        type: 'Sequelize.DATE'
      },
      
      "confirm_opt_in_fail_date": {
        type: 'Sequelize.DATE'
      },
      
      "date_created": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_addresses');
  }
};
