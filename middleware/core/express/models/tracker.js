/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:57 GMT-0400 (Bolivia Time)
 * Time: 18:38:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:57 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:57
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const tracker = sequelize.define('tracker', {
      
      id: { type: DataTypes.INTEGER, primaryKey: true },
      
      
      
      
      
      user_id: DataTypes.STRING,
      
      module_name: DataTypes.STRING,
      
      item_id: DataTypes.STRING,
      
      item_summary: DataTypes.STRING,
      
      action: DataTypes.STRING,
      
      session_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      monitor_id: DataTypes.CHAR,
      
      
      
      
      visible: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'tracker',
      timestamps: false,
    });
    tracker.associate = (models) => {
      
    };
    return tracker;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("tracker", new Schema({
    
    
    
    user_id: {type: String},
    
    module_name: {type: String},
    
    item_id: {type: String},
    
    item_summary: {type: String},
    
    action: {type: String},
    
    session_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    monitor_id: {type: String},
    
    
    
    
    visible: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'tracker');
  //</es-section>
