'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('email_marketing_prospect_lists', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "prospect_list_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "email_marketing_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('email_marketing_prospect_lists');
  }
};
