'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meetings_cstm', {


      
      "id_c": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      
      
      "jjwg_maps_lng_c": {
        type: 'Sequelize.FLOAT',
        length: 11,
        decimals: 8
      },
      
      "jjwg_maps_lat_c": {
        type: 'Sequelize.FLOAT',
        length: 10,
        decimals: 8
      },
      
      
      
      
      
      "jjwg_maps_geocode_status_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "jjwg_maps_address_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('meetings_cstm');
  }
};
