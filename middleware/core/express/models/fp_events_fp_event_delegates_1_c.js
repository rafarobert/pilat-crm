/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:11 GMT-0400 (Bolivia Time)
 * Time: 4:43:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:11 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:11
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEventsFpEventDelegates1C = sequelize.define('fpEventsFpEventDelegates1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      fp_events_fp_event_delegates_1fp_events_ida: DataTypes.STRING,
      
      fp_events_fp_event_delegates_1fp_event_delegates_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_events_fp_event_delegates_1_c',
      timestamps: false,
    });
    fpEventsFpEventDelegates1C.associate = (models) => {
      
    };
    return fpEventsFpEventDelegates1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEventsFpEventDelegates1C", new Schema({
    
    
    
    fp_events_fp_event_delegates_1fp_events_ida: {type: String},
    
    fp_events_fp_event_delegates_1fp_event_delegates_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'fp_events_fp_event_delegates_1_c');
  //</es-section>