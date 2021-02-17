'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('project_contacts_1_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "project_contacts_1project_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "project_contacts_1project_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "project_contacts_1contacts_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('project_contacts_1_c');
  }
};
