/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:14 GMT-0400 (Bolivia Time)
 * Time: 4:43:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:14 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:14
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEventLocationsFpEvents1C = sequelize.define('fpEventLocationsFpEvents1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      fp_event_locations_fp_events_1fp_event_locations_ida: DataTypes.STRING,
      
      fp_event_locations_fp_events_1fp_events_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_event_locations_fp_events_1_c',
      timestamps: false,
    });
    fpEventLocationsFpEvents1C.associate = (models) => {
      
    };
    return fpEventLocationsFpEvents1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEventLocationsFpEvents1C", new Schema({
    
    
    
    fp_event_locations_fp_events_1fp_event_locations_ida: {type: String},
    
    fp_event_locations_fp_events_1fp_events_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'fp_event_locations_fp_events_1_c');
  //</es-section>
