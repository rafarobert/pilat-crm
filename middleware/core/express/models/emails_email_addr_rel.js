/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:49 GMT-0400 (Bolivia Time)
 * Time: 0:22:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:49 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:49
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailsEmailAddrRel = sequelize.define('emailsEmailAddrRel', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      address_type: DataTypes.STRING,
      
      
      
      
      
      
      email_id: DataTypes.CHAR,
      
      email_address_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'emails_email_addr_rel',
      timestamps: false,
    });
    emailsEmailAddrRel.associate = (models) => {
      
    };
    return emailsEmailAddrRel;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailsEmailAddrRel", new Schema({
    
    
    
    address_type: {type: String},
    
    
    
    
    
    
    
    email_id: {type: String},
    
    email_address_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'emails_email_addr_rel');
  //</es-section>
