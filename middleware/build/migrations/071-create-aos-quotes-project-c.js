'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_quotes_project_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "aos_quotes1112_quotes_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "aos_quotes1112_quotes_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "aos_quotes7207project_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_quotes_project_c');
  }
};