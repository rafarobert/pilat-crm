/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Time: 14:57:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:19 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:19
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const oauthConsumer = sequelize.define('oauthConsumer', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      c_key: DataTypes.STRING,
      
      c_secret: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'oauth_consumer',
      timestamps: false,
    });
    oauthConsumer.associate = (models) => {
      
    };
    return oauthConsumer;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("oauthConsumer", new Schema({
    
    
    
    name: {type: String},
    
    c_key: {type: String},
    
    c_secret: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'oauth_consumer');
  //</es-section>
