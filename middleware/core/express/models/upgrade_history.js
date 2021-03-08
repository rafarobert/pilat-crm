/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:11 GMT-0400 (Bolivia Time)
 * Time: 15:37:11
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:11 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:11
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const upgradeHistory = sequelize.define('upgradeHistory', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      filename: DataTypes.STRING,
      
      md5sum: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      version: DataTypes.STRING,
      
      name: DataTypes.STRING,
      
      id_name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      manifest: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      
      
      
      
      
      enabled: DataTypes.TINYINT,
      
      
    }, {
      tableName:'upgrade_history',
      timestamps: false,
    });
    upgradeHistory.associate = (models) => {
      
    };
    return upgradeHistory;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("upgradeHistory", new Schema({
    
    
    
    filename: {type: String},
    
    md5sum: {type: String},
    
    type: {type: String},
    
    status: {type: String},
    
    version: {type: String},
    
    name: {type: String},
    
    id_name: {type: String},
    
    
    description: {type: String},
    
    manifest: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    
    
    
    
    
    enabled: {type: Number},
    
    
  }),'upgrade_history');
  //</es-section>
