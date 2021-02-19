/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:43 GMT-0400 (Bolivia Time)
 * Time: 18:36:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:43 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:43
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const casesCstm = sequelize.define('casesCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      jjwg_maps_geocode_status_c: DataTypes.STRING,
      
      jjwg_maps_address_c: DataTypes.STRING,
      
      
      
      
      
      
      
      jjwg_maps_lng_c: DataTypes.FLOAT,
      
      jjwg_maps_lat_c: DataTypes.FLOAT,
      
      
      
      
    }, {
      tableName:'cases_cstm',
      timestamps: false,
    });
    casesCstm.associate = (models) => {
      
    };
    return casesCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("casesCstm", new Schema({
    
    
    
    jjwg_maps_geocode_status_c: {type: String},
    
    jjwg_maps_address_c: {type: String},
    
    
    
    
    
    
    
    
    jjwg_maps_lng_c: {type: mongoose.Types.Decimal128},
    
    jjwg_maps_lat_c: {type: mongoose.Types.Decimal128},
    
    
    
    
  }),'cases_cstm');
  //</es-section>
