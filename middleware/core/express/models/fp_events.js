/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:10 GMT-0400 (Bolivia Time)
 * Time: 15:36:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:10 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:10
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEvents = sequelize.define('fpEvents', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      duration_hours: DataTypes.INTEGER,
      
      duration_minutes: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      invite_templates: DataTypes.STRING,
      
      accept_redirect: DataTypes.STRING,
      
      decline_redirect: DataTypes.STRING,
      
      activity_status_type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_start: DataTypes.DATE,
      
      date_end: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      
      
      budget: DataTypes.DECIMAL,
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_events',
      timestamps: false,
    });
    fpEvents.associate = (models) => {
      
    };
    return fpEvents;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEvents", new Schema({
    
    duration_hours: {type: Number},
    
    duration_minutes: {type: Number},
    
    
    
    name: {type: String},
    
    invite_templates: {type: String},
    
    accept_redirect: {type: String},
    
    decline_redirect: {type: String},
    
    activity_status_type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_start: {type: Date},
    
    date_end: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    currency_id: {type: String},
    
    
    
    budget: {type: mongoose.Types.Decimal128},
    
    
    deleted: {type: Number},
    
    
  }),'fp_events');
  //</es-section>
