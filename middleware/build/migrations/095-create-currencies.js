'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('currencies', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      
      
      "conversion_rate": {
        type: 'Sequelize.DOUBLE',
      },
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "symbol": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "iso4217": {
        type: 'Sequelize.STRING',
        length: 3
      },
      
      "status": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('currencies');
  }
};
