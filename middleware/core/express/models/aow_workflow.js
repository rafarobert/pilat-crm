/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:26 GMT-0400 (Bolivia Time)
 * Time: 18:36:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:26 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:26
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aowWorkflow = sequelize.define('aowWorkflow', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      flow_module: DataTypes.STRING,
      
      flow_run_on: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      run_when: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      multiple_runs: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aow_workflow',
      timestamps: false,
    });
    aowWorkflow.associate = (models) => {
      
    };
    return aowWorkflow;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aowWorkflow", new Schema({
    
    
    
    name: {type: String},
    
    flow_module: {type: String},
    
    flow_run_on: {type: String},
    
    status: {type: String},
    
    run_when: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    multiple_runs: {type: Number},
    
    
  }),'aow_workflow');
  //</es-section>
