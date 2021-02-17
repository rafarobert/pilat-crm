'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('advancedreports', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.INTEGER',
         
      },
      
      
      
      
      "category_id": {
        type: 'Sequelize.INTEGER',
        length: 4,
      },
      
      "category_id": {
        type: 'Sequelize.INTEGER',
        length: 19,
      },
      
      "sequence": {
        type: 'Sequelize.INTEGER',
        length: 10,
      },
      
      "shared": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "sharedlevel": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "iscombined": {
        type: 'Sequelize.INTEGER',
        length: 11,
      },
      
      "visible": {
        type: 'Sequelize.INTEGER',
        length: 1,
      },
      
      "deleted": {
        type: 'Sequelize.INTEGER',
        length: 36,
      },
      
      
      
      
      "module": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "title": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "owner": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "assigned_user_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      "modified_user_id": {
        type: 'Sequelize.STRING',
        length: 36
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      
      "related_data": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "fields": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "filters": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "grouping": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "aggregates": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "totalAggregates": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "options": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "labels": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "chart": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "combinedfields": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "calcFields": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      "columnstate": {
        type: 'Sequelize.BLOB',
        length: ''
      },
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('advancedreports');
  }
};
