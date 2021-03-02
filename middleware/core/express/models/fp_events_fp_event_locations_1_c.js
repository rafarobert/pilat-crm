/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:53 GMT-0400 (Bolivia Time)
 * Time: 14:0:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:53
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEventsFpEventLocations1C = sequelize.define('fpEventsFpEventLocations1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      fp_events_fp_event_locations_1fp_events_ida: DataTypes.STRING,
      
      fp_events_fp_event_locations_1fp_event_locations_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_events_fp_event_locations_1_c',
      timestamps: false,
    });
    fpEventsFpEventLocations1C.associate = (models) => {
      
    };
    return fpEventsFpEventLocations1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEventsFpEventLocations1C", new Schema({
    
    
    
    fp_events_fp_event_locations_1fp_events_ida: {type: String},
    
    fp_events_fp_event_locations_1fp_event_locations_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'fp_events_fp_event_locations_1_c');
  //</es-section>
