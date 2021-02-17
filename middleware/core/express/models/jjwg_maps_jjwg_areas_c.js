/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:23 GMT-0400 (Bolivia Time)
 * Time: 4:43:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:23 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:23
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const jjwgMapsJjwgAreasC = sequelize.define('jjwgMapsJjwgAreasC', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      jjwg_maps_5304wg_maps_ida: DataTypes.STRING,
      
      jjwg_maps_41f2g_areas_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'jjwg_maps_jjwg_areas_c',
      timestamps: false,
    });
    jjwgMapsJjwgAreasC.associate = (models) => {
      
    };
    return jjwgMapsJjwgAreasC;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("jjwgMapsJjwgAreasC", new Schema({
    
    
    
    jjwg_maps_5304wg_maps_ida: {type: String},
    
    jjwg_maps_41f2g_areas_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'jjwg_maps_jjwg_areas_c');
  //</es-section>
