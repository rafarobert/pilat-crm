/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:50 GMT-0400 (Bolivia Time)
 * Time: 0:22:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:50 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:50
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailAddresses = sequelize.define('emailAddresses', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      email_address: DataTypes.STRING,
      
      email_address_caps: DataTypes.STRING,
      
      confirm_opt_in: DataTypes.STRING,
      
      confirm_opt_in_token: DataTypes.STRING,
      
      
      
      
      confirm_opt_in_date: DataTypes.DATE,
      
      confirm_opt_in_sent_date: DataTypes.DATE,
      
      confirm_opt_in_fail_date: DataTypes.DATE,
      
      date_created: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      invalid_email: DataTypes.TINYINT,
      
      opt_out: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'email_addresses',
      timestamps: false,
    });
    emailAddresses.associate = (models) => {
      
    };
    return emailAddresses;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailAddresses", new Schema({
    
    
    
    email_address: {type: String},
    
    email_address_caps: {type: String},
    
    confirm_opt_in: {type: String},
    
    confirm_opt_in_token: {type: String},
    
    
    
    
    
    confirm_opt_in_date: {type: Date},
    
    confirm_opt_in_sent_date: {type: Date},
    
    confirm_opt_in_fail_date: {type: Date},
    
    date_created: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    
    
    
    invalid_email: {type: Number},
    
    opt_out: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'email_addresses');
  //</es-section>
