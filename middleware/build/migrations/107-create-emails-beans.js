'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emails_beans', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "bean_module": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "campaign_data": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "email_id": {
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
    return queryInterface.dropTable('emails_beans');
  }
};
