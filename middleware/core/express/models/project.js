/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:50 GMT-0400 (Bolivia Time)
 * Time: 4:43:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:50 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:50
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const project = sequelize.define('project', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      priority: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      estimated_start_date: DataTypes.DATE,
      
      estimated_end_date: DataTypes.DATE,
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      override_business_hours: DataTypes.TINYINT,
      
      
    }, {
      tableName:'project',
      timestamps: false,
    });
    project.associate = (models) => {
      
    };
    return project;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("project", new Schema({
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    priority: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    estimated_start_date: {type: Date},
    
    estimated_end_date: {type: Date},
    
    
    
    assigned_user_id: {type: String},
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    override_business_hours: {type: Number},
    
    
  }),'project');
  //</es-section>
