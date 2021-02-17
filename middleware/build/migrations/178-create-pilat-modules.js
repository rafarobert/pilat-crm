'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pilat_modules', {


      
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
      
      
      
      
      
      
      "mod_code": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mod_description": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mod_abbr": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mod_icon": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mod_group": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "mod_par_status_id": {
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
      
      
      
      "mod_parent_id": {
        type: 'Sequelize.STRING',
        references: {
            model: {tableName:'pilat_modules'},
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
    return queryInterface.dropTable('pilat_modules');
  }
};
