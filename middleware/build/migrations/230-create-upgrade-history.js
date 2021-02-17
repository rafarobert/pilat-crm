'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('upgrade_history', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "enabled": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      
      
      "filename": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "md5sum": {
        type: 'Sequelize.STRING',
        length: 32
      },
      
      "type": {
        type: 'Sequelize.STRING',
        length: 30
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "version": {
        type: 'Sequelize.STRING',
        length: 64
      },
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "id_name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      "manifest": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('upgrade_history');
  }
};
