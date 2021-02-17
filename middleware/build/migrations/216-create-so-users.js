'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('so_users', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "shortname": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      
      
      "user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('so_users');
  }
};
