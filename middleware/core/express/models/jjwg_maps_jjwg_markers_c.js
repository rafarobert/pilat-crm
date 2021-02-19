/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:38 GMT-0400 (Bolivia Time)
 * Time: 18:37:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:38 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:38
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const jjwgMapsJjwgMarkersC = sequelize.define('jjwgMapsJjwgMarkersC', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      jjwg_maps_b229wg_maps_ida: DataTypes.STRING,
      
      jjwg_maps_2e31markers_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'jjwg_maps_jjwg_markers_c',
      timestamps: false,
    });
    jjwgMapsJjwgMarkersC.associate = (models) => {
      
    };
    return jjwgMapsJjwgMarkersC;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("jjwgMapsJjwgMarkersC", new Schema({
    
    
    
    jjwg_maps_b229wg_maps_ida: {type: String},
    
    jjwg_maps_2e31markers_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'jjwg_maps_jjwg_markers_c');
  //</es-section>
