/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:06 GMT-0400 (Bolivia Time)
 * Time: 0:23:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:06 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:6
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const inboundEmail = sequelize.define('inboundEmail', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      port: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      server_url: DataTypes.STRING,
      
      email_user: DataTypes.STRING,
      
      email_password: DataTypes.STRING,
      
      service: DataTypes.STRING,
      
      mailbox_type: DataTypes.STRING,
      
      
      mailbox: DataTypes.TEXT,
      
      stored_options: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      template_id: DataTypes.CHAR,
      
      group_id: DataTypes.CHAR,
      
      groupfolder_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      delete_seen: DataTypes.TINYINT,
      
      is_personal: DataTypes.TINYINT,
      
      
    }, {
      tableName:'inbound_email',
      timestamps: false,
    });
    inboundEmail.associate = (models) => {
      
    };
    return inboundEmail;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("inboundEmail", new Schema({
    
    port: {type: Number},
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    server_url: {type: String},
    
    email_user: {type: String},
    
    email_password: {type: String},
    
    service: {type: String},
    
    mailbox_type: {type: String},
    
    
    mailbox: {type: String},
    
    stored_options: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    template_id: {type: String},
    
    group_id: {type: String},
    
    groupfolder_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    delete_seen: {type: Number},
    
    is_personal: {type: Number},
    
    
  }),'inbound_email');
  //</es-section>
