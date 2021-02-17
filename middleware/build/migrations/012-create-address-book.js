'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('address_book', {


      
      
      
      
      
      
      
      "bean": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "bean": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      
      
      
      
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 255,
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
    return queryInterface.dropTable('address_book');
  }
};
