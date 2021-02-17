'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jjwg_markers', {


      
      "id": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "deleted": {
        type: 'Sequelize.TINYINT'
      },
      
      
      
      "jjwg_maps_lat": {
        type: 'Sequelize.FLOAT',
        length: 10,
        decimals: 8
      },
      
      "jjwg_maps_lng": {
        type: 'Sequelize.FLOAT',
        length: 11,
        decimals: 8
      },
      
      
      
      
      
      "name": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "city": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "state": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "country": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "marker_image": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "description": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "date_entered": {
        type: 'Sequelize.DATE'
      },
      
      "date_modified": {
        type: 'Sequelize.DATE'
      },
      
      
      
      "modified_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "created_by": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      
      "assigned_user_id": {
        type: 'Sequelize.CHAR',
        length: 36
      },
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jjwg_markers');
  }
};
