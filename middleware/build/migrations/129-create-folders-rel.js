'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('folders_rel', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "polymorphic_module": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "polymorphic_module": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      
      
      "folder_id": {
        type: 'Sequelize.CHAR',
        length: 255,
        binary: false
      },
      
      "folder_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      
      "polymorphic_id": {
        type: 'Sequelize.CHAR',
        length: 36,
        binary: false
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('folders_rel');
  }
};
