'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('opportunities_cstm', {


      
      "id_c": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      
      "unidad_industrial_c": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "manzano_c": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "superficie_c": {
        type: 'Sequelize.INTEGER',
        length: 255,
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
      
      "lbl_tipo_pago_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "ubicacion_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "tipo_venta_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('opportunities_cstm');
  }
};
