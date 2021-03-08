/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:00 GMT-0400 (Bolivia Time)
 * Time: 15:36:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:00 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:0
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailsText = sequelize.define('emailsText', {
      
      email_id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      from_addr: DataTypes.STRING,
      
      reply_to_addr: DataTypes.STRING,
      
      
      to_addrs: DataTypes.TEXT,
      
      cc_addrs: DataTypes.TEXT,
      
      bcc_addrs: DataTypes.TEXT,
      
      description: DataTypes.TEXT,
      
      description_html: DataTypes.TEXT,
      
      raw_source: DataTypes.TEXT,
      
      
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'emails_text',
      timestamps: false,
    });
    emailsText.associate = (models) => {
      
    };
    return emailsText;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailsText", new Schema({
    
    
    
    from_addr: {type: String},
    
    reply_to_addr: {type: String},
    
    
    to_addrs: {type: String},
    
    cc_addrs: {type: String},
    
    bcc_addrs: {type: String},
    
    description: {type: String},
    
    description_html: {type: String},
    
    raw_source: {type: String},
    
    
    
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'emails_text');
  //</es-section>
