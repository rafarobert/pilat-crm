/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Time: 14:57:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:25 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:25
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const pilatLogs = sequelize.define('pilatLogs', {
      
      _id: { type: DataTypes.STRING, primaryKey: true },
      
      
      id: DataTypes.INTEGER,
      
      
      
      
      action: DataTypes.STRING,
      
      description: DataTypes.STRING,
      
      module: DataTypes.STRING,
      
      user: DataTypes.STRING,
      
      source_id: DataTypes.STRING,
      
      module_id: DataTypes.STRING,
      
      createdBy: DataTypes.STRING,
      
      updatedBy: DataTypes.STRING,
      
      
      
      
      dueAt: DataTypes.DATE,
      
      createdAt: DataTypes.DATE,
      
      updatedAt: DataTypes.DATE,
      
      
      
      
      
      
      
    }, {
      tableName:'pilat_logs',
      timestamps: false,
    });
    pilatLogs.associate = (models) => {
      
    };
    return pilatLogs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("pilatLogs", new Schema({
    
    
    id: {type: Number},
    
    
    action: {type: String},
    
    description: {type: String},
    
    module: {type: String},
    
    user: {type: String},
    
    source_id: {type: String},
    
    module_id: {type: String},
    
    createdBy: {type: String},
    
    updatedBy: {type: String},
    
    
    
    
    
    dueAt: {type: Date},
    
    createdAt: {type: Date},
    
    updatedAt: {type: Date},
    
    
    
    
    
    
    
  }),'pilat_logs');
  //</es-section>
