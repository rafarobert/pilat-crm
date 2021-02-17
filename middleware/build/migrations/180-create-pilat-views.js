'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pilat_views', {


      
      "_id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.STRING'
      },
      
      
      
      
      "id": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      
      
      
      
      
      "vie_code": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "vie_description": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "vie_route": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "vie_params": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "vie_icon": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "vie_group": {
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
      
      
      
      "vie_module_id": {
        type: 'Sequelize.STRING',
        references: {
            model: {tableName:'pilat_modules'},
            key: '_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      
      "vie_return_id": {
        type: 'Sequelize.STRING',
        references: {
            model: {tableName:'pilat_views'},
            key: '_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      
      "vie_par_status_id": {
        type: 'Sequelize.STRING',
        references: {
            model: {tableName:'pilat_params'},
            key: '_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    return queryInterface.dropTable('pilat_views');
  }
};
