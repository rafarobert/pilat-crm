/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Time: 18:38:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:35
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const remindersInvitees = sequelize.define('remindersInvitees', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      related_invitee_module: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      reminder_id: DataTypes.CHAR,
      
      related_invitee_module_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'reminders_invitees',
      timestamps: false,
    });
    remindersInvitees.associate = (models) => {
      
    };
    return remindersInvitees;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("remindersInvitees", new Schema({
    
    
    
    name: {type: String},
    
    related_invitee_module: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    reminder_id: {type: String},
    
    related_invitee_module_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'reminders_invitees');
  //</es-section>
