/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:34 GMT-0400 (Bolivia Time)
 * Time: 15:36:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:34 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:34
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const oauth2clients = sequelize.define('oauth2clients', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      duration_value: DataTypes.INTEGER,
      
      duration_amount: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      secret: DataTypes.STRING,
      
      redirect_url: DataTypes.STRING,
      
      allowed_grant_type: DataTypes.STRING,
      
      duration_unit: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      is_confidential: DataTypes.TINYINT,
      
      
    }, {
      tableName:'oauth2clients',
      timestamps: false,
    });
    oauth2clients.associate = (models) => {
      
    };
    return oauth2clients;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("oauth2clients", new Schema({
    
    duration_value: {type: Number},
    
    duration_amount: {type: Number},
    
    
    
    name: {type: String},
    
    secret: {type: String},
    
    redirect_url: {type: String},
    
    allowed_grant_type: {type: String},
    
    duration_unit: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    is_confidential: {type: Number},
    
    
  }),'oauth2clients');
  //</es-section>
