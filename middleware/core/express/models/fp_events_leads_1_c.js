/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:13 GMT-0400 (Bolivia Time)
 * Time: 15:36:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:13 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:13
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEventsLeads1C = sequelize.define('fpEventsLeads1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      email_responded: DataTypes.INTEGER,
      
      
      
      fp_events_leads_1fp_events_ida: DataTypes.STRING,
      
      fp_events_leads_1leads_idb: DataTypes.STRING,
      
      invite_status: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_events_leads_1_c',
      timestamps: false,
    });
    fpEventsLeads1C.associate = (models) => {
      
    };
    return fpEventsLeads1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEventsLeads1C", new Schema({
    
    email_responded: {type: Number},
    
    
    
    fp_events_leads_1fp_events_ida: {type: String},
    
    fp_events_leads_1leads_idb: {type: String},
    
    invite_status: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'fp_events_leads_1_c');
  //</es-section>
