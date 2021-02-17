'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts_cstm', {


      
      "id_c": {
        allowNull: false,
        primaryKey: true,
        type: 'Sequelize.CHAR',
         
      },
      
      
      
      
      
      "jjwg_maps_lng_c": {
        type: 'Sequelize.FLOAT',
        length: 4,
        decimals: 5
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
      
      "numero_documento_c": {
        type: 'Sequelize.STRING',
        length: 15
      },
      
      "extension_documento_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "nit_c": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accounts_cstm');
  }
};
