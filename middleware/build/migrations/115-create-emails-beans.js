'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emails_beans', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
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
      
      
      "campaign_data": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
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
      
      "bean_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emails_beans');
  }
};
