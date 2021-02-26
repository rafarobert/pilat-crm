/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:48 GMT-0400 (Bolivia Time)
 * Time: 0:22:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:48 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:48
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailsBeans = sequelize.define('emailsBeans', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      bean_module: DataTypes.STRING,
      
      
      campaign_data: DataTypes.TEXT,
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      email_id: DataTypes.CHAR,
      
      bean_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'emails_beans',
      timestamps: false,
    });
    emailsBeans.associate = (models) => {
      
    };
    return emailsBeans;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailsBeans", new Schema({
    
    
    
    bean_module: {type: String},
    
    
    campaign_data: {type: String},
    
    
    
    
    date_modified: {type: Date},
    
    
    
    email_id: {type: String},
    
    bean_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'emails_beans');
  //</es-section>
