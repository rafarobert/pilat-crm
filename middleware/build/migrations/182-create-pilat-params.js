'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pilat_params', {


      
      "_id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.STRING',
         
      },
      
      
      "id": {
        type: 'Sequelize.BIGINT'
      },
      
      "par_order": {
        type: 'Sequelize.BIGINT'
      },
      
      
      
      
      
      
      "par_cod": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "par_description": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "par_abbr": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "par_group": {
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
      
      "par_to": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      "par_dictionary_id": {
        type: 'Sequelize.STRING',
        references: {
            model: {tableName:'pilat_dictionaries'},
            key: '_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
      
      "par_status_id": {
        type: 'Sequelize.STRING',
        references: {
            model: {tableName:'pilat_params'},
            key: '_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
      
      "par_parent_id": {
        type: 'Sequelize.STRING',
        references: {
            model: {tableName:'pilat_params'},
            key: '_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
      
      
      "duaAt": {
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
    return queryInterface.dropTable('pilat_params');
  }
};
