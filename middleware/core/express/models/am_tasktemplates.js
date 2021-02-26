/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:56 GMT-0400 (Bolivia Time)
 * Time: 0:21:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:56 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:56
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const amTasktemplates = sequelize.define('amTasktemplates', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      percent_complete: DataTypes.INTEGER,
      
      predecessors: DataTypes.INTEGER,
      
      task_number: DataTypes.INTEGER,
      
      order_number: DataTypes.INTEGER,
      
      estimated_effort: DataTypes.INTEGER,
      
      duration: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      priority: DataTypes.STRING,
      
      relationship_type: DataTypes.STRING,
      
      utilization: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      milestone_flag: DataTypes.TINYINT,
      
      
    }, {
      tableName:'am_tasktemplates',
      timestamps: false,
    });
    amTasktemplates.associate = (models) => {
      
    };
    return amTasktemplates;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("amTasktemplates", new Schema({
    
    percent_complete: {type: Number},
    
    predecessors: {type: Number},
    
    task_number: {type: Number},
    
    order_number: {type: Number},
    
    estimated_effort: {type: Number},
    
    duration: {type: Number},
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    priority: {type: String},
    
    relationship_type: {type: String},
    
    utilization: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    milestone_flag: {type: Number},
    
    
  }),'am_tasktemplates');
  //</es-section>
