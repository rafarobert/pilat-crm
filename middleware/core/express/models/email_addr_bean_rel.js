/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:02 GMT-0400 (Bolivia Time)
 * Time: 15:36:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:02 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:2
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailAddrBeanRel = sequelize.define('emailAddrBeanRel', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      bean_module: DataTypes.STRING,
      
      
      
      
      date_created: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      email_address_id: DataTypes.CHAR,
      
      bean_id: DataTypes.CHAR,
      
      
      
      
      primary_address: DataTypes.TINYINT,
      
      reply_to_address: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'email_addr_bean_rel',
      timestamps: false,
    });
    emailAddrBeanRel.associate = (models) => {
      
    };
    return emailAddrBeanRel;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailAddrBeanRel", new Schema({
    
    
    
    bean_module: {type: String},
    
    
    
    
    
    date_created: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    email_address_id: {type: String},
    
    bean_id: {type: String},
    
    
    
    
    primary_address: {type: Number},
    
    reply_to_address: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'email_addr_bean_rel');
  //</es-section>
