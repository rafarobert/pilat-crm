/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:55 GMT-0400 (Bolivia Time)
 * Time: 18:38:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:55 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:55
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const tasks = sequelize.define('tasks', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      priority: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_due: DataTypes.DATE,
      
      date_start: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      contact_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      date_due_flag: DataTypes.TINYINT,
      
      date_start_flag: DataTypes.TINYINT,
      
      
    }, {
      tableName:'tasks',
      timestamps: false,
    });
    tasks.associate = (models) => {
      
    };
    return tasks;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("tasks", new Schema({
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    parent_type: {type: String},
    
    priority: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_due: {type: Date},
    
    date_start: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    parent_id: {type: String},
    
    contact_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    date_due_flag: {type: Number},
    
    date_start_flag: {type: Number},
    
    
  }),'tasks');
  //</es-section>
