/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:54 GMT-0400 (Bolivia Time)
 * Time: 0:21:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:54 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:54
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const alerts = sequelize.define('alerts', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      target_module: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      url_redirect: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      reminder_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      is_read: DataTypes.TINYINT,
      
      
    }, {
      tableName:'alerts',
      timestamps: false,
    });
    alerts.associate = (models) => {
      
    };
    return alerts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("alerts", new Schema({
    
    
    
    name: {type: String},
    
    target_module: {type: String},
    
    type: {type: String},
    
    url_redirect: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    reminder_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    is_read: {type: Number},
    
    
  }),'alerts');
  //</es-section>
