/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:04 GMT-0400 (Bolivia Time)
 * Time: 18:38:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:04 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:4
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const opportunitiesCstm = sequelize.define('opportunitiesCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      unidad_industrial_c: DataTypes.INTEGER,
      
      manzano_c: DataTypes.INTEGER,
      
      superficie_c: DataTypes.INTEGER,
      
      
      
      jjwg_maps_geocode_status_c: DataTypes.STRING,
      
      jjwg_maps_address_c: DataTypes.STRING,
      
      lbl_tipo_pago_c: DataTypes.STRING,
      
      ubicacion_c: DataTypes.STRING,
      
      tipo_venta_c: DataTypes.STRING,
      
      moneda_c: DataTypes.STRING,
      
      
      
      
      
      
      
      jjwg_maps_lng_c: DataTypes.FLOAT,
      
      jjwg_maps_lat_c: DataTypes.FLOAT,
      
      
      
      
    }, {
      tableName:'opportunities_cstm',
      timestamps: false,
    });
    opportunitiesCstm.associate = (models) => {
      
    };
    return opportunitiesCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("opportunitiesCstm", new Schema({
    
    unidad_industrial_c: {type: Number},
    
    manzano_c: {type: Number},
    
    superficie_c: {type: Number},
    
    
    
    jjwg_maps_geocode_status_c: {type: String},
    
    jjwg_maps_address_c: {type: String},
    
    lbl_tipo_pago_c: {type: String},
    
    ubicacion_c: {type: String},
    
    tipo_venta_c: {type: String},
    
    moneda_c: {type: String},
    
    
    
    
    
    
    
    
    jjwg_maps_lng_c: {type: mongoose.Types.Decimal128},
    
    jjwg_maps_lat_c: {type: mongoose.Types.Decimal128},
    
    
    
    
  }),'opportunities_cstm');
  //</es-section>
