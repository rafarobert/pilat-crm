'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_last_import', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "import_module": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "import_module": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "bean_type": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      
      
      
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "assigned_user_id": {
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
    return queryInterface.dropTable('users_last_import');
  }
};
