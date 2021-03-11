/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:45 GMT-0400 (Bolivia Time)
 * Time: 14:56:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:45
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emails = sequelize.define('emails', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      message_id: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      intent: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      uid: DataTypes.STRING,
      
      category_id: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      last_synced: DataTypes.DATE,
      
      date_sent_received: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      mailbox_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      orphaned: DataTypes.TINYINT,
      
      flagged: DataTypes.TINYINT,
      
      reply_to_status: DataTypes.TINYINT,
      
      
    }, {
      tableName:'emails',
      timestamps: false,
    });
    emails.associate = (models) => {
      
    };
    return emails;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emails", new Schema({
    
    
    
    name: {type: String},
    
    message_id: {type: String},
    
    type: {type: String},
    
    status: {type: String},
    
    intent: {type: String},
    
    parent_type: {type: String},
    
    uid: {type: String},
    
    category_id: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    last_synced: {type: Date},
    
    date_sent_received: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    mailbox_id: {type: String},
    
    parent_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    orphaned: {type: Number},
    
    flagged: {type: Number},
    
    reply_to_status: {type: Number},
    
    
  }),'emails');
  //</es-section>
