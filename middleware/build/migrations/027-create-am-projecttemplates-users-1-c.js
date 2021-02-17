'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('am_projecttemplates_users_1_c', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "am_projecttemplates_ida": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "am_projecttemplates_ida": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "users_idb": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('am_projecttemplates_users_1_c');
  }
};
