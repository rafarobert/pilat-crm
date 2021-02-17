'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('outbound_email', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "mail_smtpauth_req": {
        type: 'Sequelize.TINYINT'
      },
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 15
      },
      
      "smtp_from_name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "smtp_from_addr": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mail_sendtype": {
        type: 'Sequelize.STRING',
        length: 8
      },
      
      "mail_smtptype": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "mail_smtpserver": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "mail_smtpport": {
        type: 'Sequelize.STRING',
        length: 5
      },
      
      "mail_smtpuser": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "mail_smtppass": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "mail_smtpssl": {
        type: 'Sequelize.STRING',
        length: 1
      },
      
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
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
    return queryInterface.dropTable('outbound_email');
  }
};
