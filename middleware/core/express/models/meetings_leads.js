/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:09 GMT-0400 (Bolivia Time)
 * Time: 14:1:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:09 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:9
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const meetingsLeads = sequelize.define('meetingsLeads', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      meeting_id: DataTypes.STRING,
      
      lead_id: DataTypes.STRING,
      
      required: DataTypes.STRING,
      
      accept_status: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'meetings_leads',
      timestamps: false,
    });
    meetingsLeads.associate = (models) => {
      
    };
    return meetingsLeads;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("meetingsLeads", new Schema({
    
    
    
    meeting_id: {type: String},
    
    lead_id: {type: String},
    
    required: {type: String},
    
    accept_status: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'meetings_leads');
  //</es-section>
