'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prospect_lists_prospects', {


      
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
      
      "related_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "related_type": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prospect_lists_prospects');
  }
};
