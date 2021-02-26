/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:11 GMT-0400 (Bolivia Time)
 * Time: 0:23:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:11 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:11
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const jjwgMarkers = sequelize.define('jjwgMarkers', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      city: DataTypes.STRING,
      
      state: DataTypes.STRING,
      
      country: DataTypes.STRING,
      
      marker_image: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      jjwg_maps_lat: DataTypes.FLOAT,
      
      jjwg_maps_lng: DataTypes.FLOAT,
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'jjwg_markers',
      timestamps: false,
    });
    jjwgMarkers.associate = (models) => {
      
    };
    return jjwgMarkers;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("jjwgMarkers", new Schema({
    
    
    
    name: {type: String},
    
    city: {type: String},
    
    state: {type: String},
    
    country: {type: String},
    
    marker_image: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    jjwg_maps_lat: {type: mongoose.Types.Decimal128},
    
    jjwg_maps_lng: {type: mongoose.Types.Decimal128},
    
    
    
    deleted: {type: Number},
    
    
  }),'jjwg_markers');
  //</es-section>
