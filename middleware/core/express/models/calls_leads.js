/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:33 GMT-0400 (Bolivia Time)
 * Time: 18:36:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:33 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:33
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const callsLeads = sequelize.define('callsLeads', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      call_id: DataTypes.STRING,
      
      lead_id: DataTypes.STRING,
      
      required: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'calls_leads',
      timestamps: false,
    });
    callsLeads.associate = (models) => {
      
    };
    return callsLeads;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("callsLeads", new Schema({
    
    
    
    call_id: {type: String},
    
    lead_id: {type: String},
    
    required: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'calls_leads');
  //</es-section>
