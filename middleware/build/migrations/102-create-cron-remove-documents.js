'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cron_remove_documents', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      
      
      
      
      "bean_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "bean_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "module": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cron_remove_documents');
  }
};
