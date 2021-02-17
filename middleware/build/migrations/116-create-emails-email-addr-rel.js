'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emails_email_addr_rel', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "address_type": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "address_type": {
        type: 'Sequelize.STRING',
        length: 4
      },
      
      
      
      
      
      
      "email_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "email_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "email_address_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emails_email_addr_rel');
  }
};
