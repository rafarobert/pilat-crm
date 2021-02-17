'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_addr_bean_rel', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
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
        length: 36
      },
      
      "bean_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_addr_bean_rel');
  }
};
