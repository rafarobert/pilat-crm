'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leads_cstm', {


      
      "id_c": {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: 'Sequelize.CHAR'
      },
      
      
      
      "actividad_llamar_c": {
        type: 'Sequelize.TINYINT'
      },
      
      "tiene_whatsapp_c": {
        type: 'Sequelize.TINYINT'
      },
      
      "correo_principal_c": {
        type: 'Sequelize.TINYINT'
      },
      
      "correo_alternativo_c": {
        type: 'Sequelize.TINYINT'
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
      
      
      
      "superficie_c": {
        type: 'Sequelize.DOUBLE',
      },
      
      
      
      "jjwg_maps_geocode_status_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "jjwg_maps_address_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "extension_documento_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "genero_c": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "etapas_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "numero_documento_c": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "sec_email_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "nombre_empresa_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "nombre_contacto_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "nit_empresa_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "email_empresa_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "phone_mobil_2_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "phone_mobil_3_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "asesor_negocio_c": {
        type: 'Sequelize.STRING',
        length: 255
      },
      
      "tipo_lead_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "rubro_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "tipo_cliente_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      "sexo_c": {
        type: 'Sequelize.STRING',
        length: 100
      },
      
      
      "actividad_c": {
        type: 'Sequelize.TEXT',
      },
      
      
      
      "actividad_llamar_fecha_c": {
        type: 'Sequelize.DATE'
      },
      
      "fecha_validex_c": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('leads_cstm');
  }
};
