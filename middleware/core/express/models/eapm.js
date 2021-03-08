/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:57 GMT-0400 (Bolivia Time)
 * Time: 15:35:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:57 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:57
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const eapm = sequelize.define('eapm', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      password: DataTypes.STRING,
      
      url: DataTypes.STRING,
      
      application: DataTypes.STRING,
      
      consumer_key: DataTypes.STRING,
      
      consumer_secret: DataTypes.STRING,
      
      oauth_token: DataTypes.STRING,
      
      oauth_secret: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      api_data: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      validated: DataTypes.TINYINT,
      
      
    }, {
      tableName:'eapm',
      timestamps: false,
    });
    eapm.associate = (models) => {
      
    };
    return eapm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("eapm", new Schema({
    
    
    
    name: {type: String},
    
    password: {type: String},
    
    url: {type: String},
    
    application: {type: String},
    
    consumer_key: {type: String},
    
    consumer_secret: {type: String},
    
    oauth_token: {type: String},
    
    oauth_secret: {type: String},
    
    
    description: {type: String},
    
    api_data: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    validated: {type: Number},
    
    
  }),'eapm');
  //</es-section>
