/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:14 GMT-0400 (Bolivia Time)
 * Time: 14:1:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:14 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:14
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const outboundEmail = sequelize.define('outboundEmail', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      smtp_from_name: DataTypes.STRING,
      
      smtp_from_addr: DataTypes.STRING,
      
      mail_sendtype: DataTypes.STRING,
      
      mail_smtptype: DataTypes.STRING,
      
      mail_smtpserver: DataTypes.STRING,
      
      mail_smtpport: DataTypes.STRING,
      
      mail_smtpuser: DataTypes.STRING,
      
      mail_smtppass: DataTypes.STRING,
      
      mail_smtpssl: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      user_id: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      mail_smtpauth_req: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'outbound_email',
      timestamps: false,
    });
    outboundEmail.associate = (models) => {
      
    };
    return outboundEmail;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("outboundEmail", new Schema({
    
    
    
    name: {type: String},
    
    type: {type: String},
    
    smtp_from_name: {type: String},
    
    smtp_from_addr: {type: String},
    
    mail_sendtype: {type: String},
    
    mail_smtptype: {type: String},
    
    mail_smtpserver: {type: String},
    
    mail_smtpport: {type: String},
    
    mail_smtpuser: {type: String},
    
    mail_smtppass: {type: String},
    
    mail_smtpssl: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    user_id: {type: String},
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    mail_smtpauth_req: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'outbound_email');
  //</es-section>
