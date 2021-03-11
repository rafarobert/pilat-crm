/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:24 GMT-0400 (Bolivia Time)
 * Time: 14:56:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:24 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:24
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aowConditions = sequelize.define('aowConditions', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      condition_order: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      field: DataTypes.STRING,
      
      operator: DataTypes.STRING,
      
      value_type: DataTypes.STRING,
      
      value: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      module_path: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      aow_workflow_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aow_conditions',
      timestamps: false,
    });
    aowConditions.associate = (models) => {
      
    };
    return aowConditions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aowConditions", new Schema({
    
    condition_order: {type: Number},
    
    
    
    name: {type: String},
    
    field: {type: String},
    
    operator: {type: String},
    
    value_type: {type: String},
    
    value: {type: String},
    
    
    description: {type: String},
    
    module_path: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    aow_workflow_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aow_conditions');
  //</es-section>
