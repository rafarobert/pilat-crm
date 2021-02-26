/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:27 GMT-0400 (Bolivia Time)
 * Time: 0:22:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:27 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:27
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aowProcessed = sequelize.define('aowProcessed', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      aow_workflow_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aow_processed',
      timestamps: false,
    });
    aowProcessed.associate = (models) => {
      
    };
    return aowProcessed;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aowProcessed", new Schema({
    
    
    
    name: {type: String},
    
    parent_type: {type: String},
    
    status: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    aow_workflow_id: {type: String},
    
    parent_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aow_processed');
  //</es-section>
