'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emails_text', {


      
      "email_id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "from_addr": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "reply_to_addr": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "to_addrs": {
        type: 'Sequelize.TEXT',
      },
      
      "cc_addrs": {
        type: 'Sequelize.TEXT',
      },
      
      "bcc_addrs": {
        type: 'Sequelize.TEXT',
      },
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "description_html": {
        type: 'Sequelize.TEXT',
      },
      
      "raw_source": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emails_text');
  }
};
