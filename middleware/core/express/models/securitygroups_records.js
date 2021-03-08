/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:01 GMT-0400 (Bolivia Time)
 * Time: 15:37:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:01 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:1
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const securitygroupsRecords = sequelize.define('securitygroupsRecords', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      securitygroup_id: DataTypes.CHAR,
      
      record_id: DataTypes.CHAR,
      
      module: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'securitygroups_records',
      timestamps: false,
    });
    securitygroupsRecords.associate = (models) => {
      
    };
    return securitygroupsRecords;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("securitygroupsRecords", new Schema({
    
    
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    securitygroup_id: {type: String},
    
    record_id: {type: String},
    
    module: {type: String},
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'securitygroups_records');
  //</es-section>
