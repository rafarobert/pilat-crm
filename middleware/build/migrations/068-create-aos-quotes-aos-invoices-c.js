'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_quotes_aos_invoices_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "aos_quotes77d9_quotes_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "aos_quotes77d9_quotes_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "aos_quotes6b83nvoices_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_quotes_aos_invoices_c');
  }
};
