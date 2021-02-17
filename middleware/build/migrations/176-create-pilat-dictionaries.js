'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pilat_dictionaries', {


      
      "_id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      "id": {
        type: 'Sequelize.BIGINT'
      },
      
      
      
      
      
      
      
      
      "dic_code": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "dic_description": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "dic_group": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "dic_par_status_id": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "createdBy": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "updatedBy": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      "dueAt": {
        type: 'Sequelize.DATE'
      },
      
      "createdAt": {
        type: 'Sequelize.DATE'
      },
      
      "updatedAt": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pilat_dictionaries');
  }
};
