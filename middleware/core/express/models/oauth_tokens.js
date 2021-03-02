/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:12 GMT-0400 (Bolivia Time)
 * Time: 14:1:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:12 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:12
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const oauthTokens = sequelize.define('oauthTokens', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      deleted: { type: DataTypes.TINYINT, primaryKey: true },
      
      
      token_ts: DataTypes.INTEGER,
      
      
      
      
      secret: DataTypes.STRING,
      
      tstate: DataTypes.STRING,
      
      verify: DataTypes.STRING,
      
      callback_url: DataTypes.STRING,
      
      
      
      
      
      
      consumer: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      
    }, {
      tableName:'oauth_tokens',
      timestamps: false,
    });
    oauthTokens.associate = (models) => {
      
    };
    return oauthTokens;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("oauthTokens", new Schema({
    
    
    token_ts: {type: Number},
    
    
    secret: {type: String},
    
    tstate: {type: String},
    
    verify: {type: String},
    
    callback_url: {type: String},
    
    
    
    
    
    
    
    consumer: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    
  }),'oauth_tokens');
  //</es-section>
