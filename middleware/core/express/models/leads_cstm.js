/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:29 GMT-0400 (Bolivia Time)
 * Time: 4:43:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:29 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:29
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const leadsCstm = sequelize.define('leadsCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      jjwg_maps_geocode_status_c: DataTypes.STRING,
      
      jjwg_maps_address_c: DataTypes.STRING,
      
      extension_documento_c: DataTypes.STRING,
      
      genero_c: DataTypes.STRING,
      
      etapas_c: DataTypes.STRING,
      
      numero_documento_c: DataTypes.STRING,
      
      sec_email_c: DataTypes.STRING,
      
      nombre_empresa_c: DataTypes.STRING,
      
      nombre_contacto_c: DataTypes.STRING,
      
      nit_empresa_c: DataTypes.STRING,
      
      email_empresa_c: DataTypes.STRING,
      
      phone_mobil_2_c: DataTypes.STRING,
      
      phone_mobil_3_c: DataTypes.STRING,
      
      asesor_negocio_c: DataTypes.STRING,
      
      tipo_lead_c: DataTypes.STRING,
      
      rubro_c: DataTypes.STRING,
      
      tipo_cliente_c: DataTypes.STRING,
      
      sexo_c: DataTypes.STRING,
      
      
      actividad_c: DataTypes.TEXT,
      
      
      
      actividad_llamar_fecha_c: DataTypes.DATE,
      
      fecha_validex_c: DataTypes.DATE,
      
      
      
      
      jjwg_maps_lng_c: DataTypes.FLOAT,
      
      jjwg_maps_lat_c: DataTypes.FLOAT,
      
      
      
      actividad_llamar_c: DataTypes.TINYINT,
      
      tiene_whatsapp_c: DataTypes.TINYINT,
      
      correo_principal_c: DataTypes.TINYINT,
      
      correo_alternativo_c: DataTypes.TINYINT,
      
      
      superficie_c: DataTypes.DOUBLE,
      
    }, {
      tableName:'leads_cstm',
      timestamps: false,
    });
    leadsCstm.associate = (models) => {
      
    };
    return leadsCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("leadsCstm", new Schema({
    
    
    
    jjwg_maps_geocode_status_c: {type: String},
    
    jjwg_maps_address_c: {type: String},
    
    extension_documento_c: {type: String},
    
    genero_c: {type: String},
    
    etapas_c: {type: String},
    
    numero_documento_c: {type: String},
    
    sec_email_c: {type: String},
    
    nombre_empresa_c: {type: String},
    
    nombre_contacto_c: {type: String},
    
    nit_empresa_c: {type: String},
    
    email_empresa_c: {type: String},
    
    phone_mobil_2_c: {type: String},
    
    phone_mobil_3_c: {type: String},
    
    asesor_negocio_c: {type: String},
    
    tipo_lead_c: {type: String},
    
    rubro_c: {type: String},
    
    tipo_cliente_c: {type: String},
    
    sexo_c: {type: String},
    
    
    actividad_c: {type: String},
    
    
    
    
    actividad_llamar_fecha_c: {type: Date},
    
    fecha_validex_c: {type: Date},
    
    
    
    
    jjwg_maps_lng_c: {type: mongoose.Types.Decimal128},
    
    jjwg_maps_lat_c: {type: mongoose.Types.Decimal128},
    
    
    
    actividad_llamar_c: {type: Number},
    
    tiene_whatsapp_c: {type: Number},
    
    correo_principal_c: {type: Number},
    
    correo_alternativo_c: {type: Number},
    
    
    superficie_c: {type: mongoose.Types.Decimal128},
    
  }),'leads_cstm');
  //</es-section>
