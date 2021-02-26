/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:44 GMT-0400 (Bolivia Time)
 * Time: 0:23:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:44 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:44
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const schedulers = sequelize.define('schedulers', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      job: DataTypes.STRING,
      
      job_interval: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_time_start: DataTypes.DATE,
      
      date_time_end: DataTypes.DATE,
      
      last_run: DataTypes.DATE,
      
      
      
      created_by: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      catch_up: DataTypes.TINYINT,
      
      
    }, {
      tableName:'schedulers',
      timestamps: false,
    });
    schedulers.associate = (models) => {
      
    };
    return schedulers;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("schedulers", new Schema({
    
    
    
    name: {type: String},
    
    job: {type: String},
    
    job_interval: {type: String},
    
    status: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_time_start: {type: Date},
    
    date_time_end: {type: Date},
    
    last_run: {type: Date},
    
    
    
    created_by: {type: String},
    
    modified_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    catch_up: {type: Number},
    
    
  }),'schedulers');
  //</es-section>
