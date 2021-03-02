/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:11 GMT-0400 (Bolivia Time)
 * Time: 14:1:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:11 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:11
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const oauth2tokens = sequelize.define('oauth2tokens', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      token_type: DataTypes.STRING,
      
      access_token: DataTypes.STRING,
      
      refresh_token: DataTypes.STRING,
      
      grant_type: DataTypes.STRING,
      
      state: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      access_token_expires: DataTypes.DATE,
      
      refresh_token_expires: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      client: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      token_is_revoked: DataTypes.TINYINT,
      
      
    }, {
      tableName:'oauth2tokens',
      timestamps: false,
    });
    oauth2tokens.associate = (models) => {
      
    };
    return oauth2tokens;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("oauth2tokens", new Schema({
    
    
    
    name: {type: String},
    
    token_type: {type: String},
    
    access_token: {type: String},
    
    refresh_token: {type: String},
    
    grant_type: {type: String},
    
    state: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    access_token_expires: {type: Date},
    
    refresh_token_expires: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    client: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    token_is_revoked: {type: Number},
    
    
  }),'oauth2tokens');
  //</es-section>
