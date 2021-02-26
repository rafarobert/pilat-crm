/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:41 GMT-0400 (Bolivia Time)
 * Time: 0:23:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:41 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:41
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const reminders = sequelize.define('reminders', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      date_willexecute: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      timer_popup: DataTypes.STRING,
      
      timer_email: DataTypes.STRING,
      
      related_event_module: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      related_event_module_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      popup: DataTypes.TINYINT,
      
      email: DataTypes.TINYINT,
      
      email_sent: DataTypes.TINYINT,
      
      popup_viewed: DataTypes.TINYINT,
      
      
    }, {
      tableName:'reminders',
      timestamps: false,
    });
    reminders.associate = (models) => {
      
    };
    return reminders;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("reminders", new Schema({
    
    date_willexecute: {type: Number},
    
    
    
    name: {type: String},
    
    timer_popup: {type: String},
    
    timer_email: {type: String},
    
    related_event_module: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    related_event_module_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    popup: {type: Number},
    
    email: {type: Number},
    
    email_sent: {type: Number},
    
    popup_viewed: {type: Number},
    
    
  }),'reminders');
  //</es-section>
