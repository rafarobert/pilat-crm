/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:57 GMT-0400 (Bolivia Time)
 * Time: 14:56:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:57 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:57
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEventsProspects1C = sequelize.define('fpEventsProspects1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      email_responded: DataTypes.INTEGER,
      
      
      
      fp_events_prospects_1fp_events_ida: DataTypes.STRING,
      
      fp_events_prospects_1prospects_idb: DataTypes.STRING,
      
      invite_status: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_events_prospects_1_c',
      timestamps: false,
    });
    fpEventsProspects1C.associate = (models) => {
      
    };
    return fpEventsProspects1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEventsProspects1C", new Schema({
    
    email_responded: {type: Number},
    
    
    
    fp_events_prospects_1fp_events_ida: {type: String},
    
    fp_events_prospects_1prospects_idb: {type: String},
    
    invite_status: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'fp_events_prospects_1_c');
  //</es-section>
