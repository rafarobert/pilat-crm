'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_addr_bean_rel', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "primary_address": {
        type: 'Sequelize.TINYINT'
      },
      
      "reply_to_address": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "bean_module": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "bean_module": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "date_created": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "email_address_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "email_address_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "bean_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_addr_bean_rel');
  }
};
