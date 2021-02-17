'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emails_email_addr_rel', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "address_type": {
        type: 'Sequelize.STRING',
        length: 4
      },
      
      
      
      
      
      
      "email_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "email_address_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emails_email_addr_rel');
  }
};
