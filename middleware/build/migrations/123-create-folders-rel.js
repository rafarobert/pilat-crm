'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('folders_rel', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "polymorphic_module": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      
      
      "folder_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "polymorphic_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('folders_rel');
  }
};
