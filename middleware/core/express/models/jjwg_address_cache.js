/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:19 GMT-0400 (Bolivia Time)
 * Time: 4:43:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:19 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:19
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const jjwgAddressCache = sequelize.define('jjwgAddressCache', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      lat: DataTypes.FLOAT,
      
      lng: DataTypes.FLOAT,
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'jjwg_address_cache',
      timestamps: false,
    });
    jjwgAddressCache.associate = (models) => {
      
    };
    return jjwgAddressCache;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("jjwgAddressCache", new Schema({
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    lat: {type: mongoose.Types.Decimal128},
    
    lng: {type: mongoose.Types.Decimal128},
    
    
    
    deleted: {type: Number},
    
    
  }),'jjwg_address_cache');
  //</es-section>