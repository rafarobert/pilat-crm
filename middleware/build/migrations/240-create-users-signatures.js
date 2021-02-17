'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_signatures', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "user_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "user_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "signature": {
        type: 'Sequelize.TEXT',
      },
      
      "signature_html": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_signatures');
  }
};
