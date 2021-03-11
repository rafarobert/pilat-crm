/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:30 GMT-0400 (Bolivia Time)
 * Time: 14:56:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:30 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:30
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const callsReschedule = sequelize.define('callsReschedule', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      reason: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      call_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'calls_reschedule',
      timestamps: false,
    });
    callsReschedule.associate = (models) => {
      
    };
    return callsReschedule;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("callsReschedule", new Schema({
    
    
    
    name: {type: String},
    
    reason: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    call_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'calls_reschedule');
  //</es-section>
