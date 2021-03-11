/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:28 GMT-0400 (Bolivia Time)
 * Time: 14:56:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:28 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:28
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const calls = sequelize.define('calls', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      duration_hours: DataTypes.INTEGER,
      
      duration_minutes: DataTypes.INTEGER,
      
      reminder_time: DataTypes.INTEGER,
      
      email_reminder_time: DataTypes.INTEGER,
      
      repeat_interval: DataTypes.INTEGER,
      
      repeat_count: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      direction: DataTypes.STRING,
      
      outlook_id: DataTypes.STRING,
      
      repeat_type: DataTypes.STRING,
      
      repeat_dow: DataTypes.STRING,
      
      recurring_source: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_start: DataTypes.DATE,
      
      date_end: DataTypes.DATE,
      
      repeat_until: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      repeat_parent_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      email_reminder_sent: DataTypes.TINYINT,
      
      
    }, {
      tableName:'calls',
      timestamps: false,
    });
    calls.associate = (models) => {
      
    };
    return calls;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("calls", new Schema({
    
    duration_hours: {type: Number},
    
    duration_minutes: {type: Number},
    
    reminder_time: {type: Number},
    
    email_reminder_time: {type: Number},
    
    repeat_interval: {type: Number},
    
    repeat_count: {type: Number},
    
    
    
    name: {type: String},
    
    parent_type: {type: String},
    
    status: {type: String},
    
    direction: {type: String},
    
    outlook_id: {type: String},
    
    repeat_type: {type: String},
    
    repeat_dow: {type: String},
    
    recurring_source: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_start: {type: Date},
    
    date_end: {type: Date},
    
    repeat_until: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    parent_id: {type: String},
    
    repeat_parent_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    email_reminder_sent: {type: Number},
    
    
  }),'calls');
  //</es-section>
