/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:35 GMT-0400 (Bolivia Time)
 * Time: 14:57:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:35 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:35
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const prospectsCstm = sequelize.define('prospectsCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      jjwg_maps_geocode_status_c: DataTypes.STRING,
      
      jjwg_maps_address_c: DataTypes.STRING,
      
      
      
      
      
      
      
      jjwg_maps_lng_c: DataTypes.FLOAT,
      
      jjwg_maps_lat_c: DataTypes.FLOAT,
      
      
      
      
    }, {
      tableName:'prospects_cstm',
      timestamps: false,
    });
    prospectsCstm.associate = (models) => {
      
    };
    return prospectsCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("prospectsCstm", new Schema({
    
    
    
    jjwg_maps_geocode_status_c: {type: String},
    
    jjwg_maps_address_c: {type: String},
    
    
    
    
    
    
    
    
    jjwg_maps_lng_c: {type: mongoose.Types.Decimal128},
    
    jjwg_maps_lat_c: {type: mongoose.Types.Decimal128},
    
    
    
    
  }),'prospects_cstm');
  //</es-section>
