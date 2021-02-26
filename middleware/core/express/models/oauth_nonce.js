/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:23 GMT-0400 (Bolivia Time)
 * Time: 0:23:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:23 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:23
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const oauthNonce = sequelize.define('oauthNonce', {
      
      conskey: { type: DataTypes.STRING, primaryKey: true },
      
      nonce: { type: DataTypes.STRING, primaryKey: true },
      
      
      nonce_ts: DataTypes.INTEGER,
      
      
      
      
      
      
      
      
      
      
      
      
      
    }, {
      tableName:'oauth_nonce',
      timestamps: false,
    });
    oauthNonce.associate = (models) => {
      
    };
    return oauthNonce;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("oauthNonce", new Schema({
    
    
    nonce_ts: {type: Number},
    
    
    
    
    
    
    
    
    
    
    
    
  }),'oauth_nonce');
  //</es-section>
