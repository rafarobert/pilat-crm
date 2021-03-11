/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Time: 14:57:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:14
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const meetings = sequelize.define('meetings', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      duration_hours: DataTypes.INTEGER,
      
      duration_minutes: DataTypes.INTEGER,
      
      reminder_time: DataTypes.INTEGER,
      
      email_reminder_time: DataTypes.INTEGER,
      
      sequence: DataTypes.INTEGER,
      
      repeat_interval: DataTypes.INTEGER,
      
      repeat_count: DataTypes.INTEGER,
      
      gsync_lastsync: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      location: DataTypes.STRING,
      
      password: DataTypes.STRING,
      
      join_url: DataTypes.STRING,
      
      host_url: DataTypes.STRING,
      
      displayed_url: DataTypes.STRING,
      
      creator: DataTypes.STRING,
      
      external_id: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      outlook_id: DataTypes.STRING,
      
      repeat_type: DataTypes.STRING,
      
      repeat_dow: DataTypes.STRING,
      
      recurring_source: DataTypes.STRING,
      
      gsync_id: DataTypes.STRING,
      
      
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
      tableName:'meetings',
      timestamps: false,
    });
    meetings.associate = (models) => {
      
    };
    return meetings;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("meetings", new Schema({
    
    duration_hours: {type: Number},
    
    duration_minutes: {type: Number},
    
    reminder_time: {type: Number},
    
    email_reminder_time: {type: Number},
    
    sequence: {type: Number},
    
    repeat_interval: {type: Number},
    
    repeat_count: {type: Number},
    
    gsync_lastsync: {type: Number},
    
    
    
    name: {type: String},
    
    location: {type: String},
    
    password: {type: String},
    
    join_url: {type: String},
    
    host_url: {type: String},
    
    displayed_url: {type: String},
    
    creator: {type: String},
    
    external_id: {type: String},
    
    parent_type: {type: String},
    
    status: {type: String},
    
    type: {type: String},
    
    outlook_id: {type: String},
    
    repeat_type: {type: String},
    
    repeat_dow: {type: String},
    
    recurring_source: {type: String},
    
    gsync_id: {type: String},
    
    
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
    
    
  }),'meetings');
  //</es-section>
