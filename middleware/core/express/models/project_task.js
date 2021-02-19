/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:22 GMT-0400 (Bolivia Time)
 * Time: 18:38:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:22 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:22
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectTask = sequelize.define('projectTask', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      project_task_id: DataTypes.INTEGER,
      
      time_start: DataTypes.INTEGER,
      
      time_finish: DataTypes.INTEGER,
      
      duration: DataTypes.INTEGER,
      
      actual_duration: DataTypes.INTEGER,
      
      percent_complete: DataTypes.INTEGER,
      
      parent_task_id: DataTypes.INTEGER,
      
      order_number: DataTypes.INTEGER,
      
      task_number: DataTypes.INTEGER,
      
      estimated_effort: DataTypes.INTEGER,
      
      actual_effort: DataTypes.INTEGER,
      
      utilization: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      relationship_type: DataTypes.STRING,
      
      priority: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      predecessors: DataTypes.TEXT,
      
      duration_unit: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_start: DataTypes.DATE,
      
      date_finish: DataTypes.DATE,
      
      date_due: DataTypes.DATE,
      
      
      
      project_id: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      milestone_flag: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'project_task',
      timestamps: false,
    });
    projectTask.associate = (models) => {
      
    };
    return projectTask;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectTask", new Schema({
    
    project_task_id: {type: Number},
    
    time_start: {type: Number},
    
    time_finish: {type: Number},
    
    duration: {type: Number},
    
    actual_duration: {type: Number},
    
    percent_complete: {type: Number},
    
    parent_task_id: {type: Number},
    
    order_number: {type: Number},
    
    task_number: {type: Number},
    
    estimated_effort: {type: Number},
    
    actual_effort: {type: Number},
    
    utilization: {type: Number},
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    relationship_type: {type: String},
    
    priority: {type: String},
    
    
    description: {type: String},
    
    predecessors: {type: String},
    
    duration_unit: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_start: {type: Date},
    
    date_finish: {type: Date},
    
    date_due: {type: Date},
    
    
    
    project_id: {type: String},
    
    assigned_user_id: {type: String},
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    milestone_flag: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'project_task');
  //</es-section>
