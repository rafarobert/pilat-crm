/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:47 GMT-0400 (Bolivia Time)
 * Time: 4:42:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:47 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:47
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const contactsCstm = sequelize.define('contactsCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      jjwg_maps_geocode_status_c: DataTypes.STRING,
      
      jjwg_maps_address_c: DataTypes.STRING,
      
      
      
      
      
      
      
      jjwg_maps_lng_c: DataTypes.FLOAT,
      
      jjwg_maps_lat_c: DataTypes.FLOAT,
      
      
      
      
    }, {
      tableName:'contacts_cstm',
      timestamps: false,
    });
    contactsCstm.associate = (models) => {
      
    };
    return contactsCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("contactsCstm", new Schema({
    
    
    
    jjwg_maps_geocode_status_c: {type: String},
    
    jjwg_maps_address_c: {type: String},
    
    
    
    
    
    
    
    
    jjwg_maps_lng_c: {type: mongoose.Types.Decimal128},
    
    jjwg_maps_lat_c: {type: mongoose.Types.Decimal128},
    
    
    
    
  }),'contacts_cstm');
  //</es-section>