'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_marketing', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      "all_prospect_lists": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "from_name": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "from_addr": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "reply_to_name": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "reply_to_addr": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "inbound_email_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      "date_start": {
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
      
      "template_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "campaign_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "outbound_email_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_marketing');
  }
};
