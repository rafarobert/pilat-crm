'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aok_knowledgebase_categories', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "aok_knowledgebase_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "aok_knowledgebase_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "aok_knowledge_base_categories_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aok_knowledgebase_categories');
  }
};
