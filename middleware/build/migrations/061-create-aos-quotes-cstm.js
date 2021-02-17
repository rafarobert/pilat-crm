'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aos_quotes_cstm', {


      
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
      
      "metro_cuadrado_c": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "frente_metros_c": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      "fondo_metros_c": {
        type: 'Sequelize.INTEGER',
        length: 255,
      },
      
      
      
      "lbl_superficie_c": {
        type: 'Sequelize.DECIMAL',
        length: 10,
        decimals: 5
      },
      
      "lbl_superficie_c": {
        type: 'Sequelize.DECIMAL',
        length: 10,
        decimals: 2
      },
      
      "lbl_cuotainicial_c": {
        type: 'Sequelize.DECIMAL',
        length: 10,
        decimals: 2
      },
      
      "saldo_cuota_inical_c": {
        type: 'Sequelize.DECIMAL',
        length: 18,
        decimals: 8
      },
      
      "precio_mcuadrado_c": {
        type: 'Sequelize.DECIMAL',
        length: 18,
        decimals: 8
      },
      
      "saldo_c": {
        type: 'Sequelize.DECIMAL',
        length: 18,
        decimals: 8
      },
      
      "cuota_mensual_c": {
        type: 'Sequelize.DECIMAL',
        length: 18,
        decimals: 8
      },
      
      
      
      
      "ubicacion_c": {
        type: 'Sequelize.STRING',
        length: 20
      },
      
      "lbl_tipoventa_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "term_years_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "tipo_pago_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "link_terreno_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      
      
      
      "fecha_envio_programada_c": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aos_quotes_cstm');
  }
};
