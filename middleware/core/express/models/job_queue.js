/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:26 GMT-0400 (Bolivia Time)
 * Time: 15:36:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:26 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:26
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const jobQueue = sequelize.define('jobQueue', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      job_delay: DataTypes.INTEGER,
      
      percent_complete: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      resolution: DataTypes.STRING,
      
      target: DataTypes.STRING,
      
      client: DataTypes.STRING,
      
      
      message: DataTypes.TEXT,
      
      data: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      execute_time: DataTypes.DATE,
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      scheduler_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      requeue: DataTypes.TINYINT,
      
      retry_count: DataTypes.TINYINT,
      
      failure_count: DataTypes.TINYINT,
      
      
    }, {
      tableName:'job_queue',
      timestamps: false,
    });
    jobQueue.associate = (models) => {
      
    };
    return jobQueue;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("jobQueue", new Schema({
    
    job_delay: {type: Number},
    
    percent_complete: {type: Number},
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    resolution: {type: String},
    
    target: {type: String},
    
    client: {type: String},
    
    
    message: {type: String},
    
    data: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    execute_time: {type: Date},
    
    
    
    assigned_user_id: {type: String},
    
    scheduler_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    requeue: {type: Number},
    
    retry_count: {type: Number},
    
    failure_count: {type: Number},
    
    
  }),'job_queue');
  //</es-section>
