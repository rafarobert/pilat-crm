/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:09 GMT-0400 (Bolivia Time)
 * Time: 4:44:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:09 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:9
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const securitygroupsUsers = sequelize.define('securitygroupsUsers', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      securitygroup_id: DataTypes.STRING,
      
      user_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      primary_group: DataTypes.TINYINT,
      
      noninheritable: DataTypes.TINYINT,
      
      
    }, {
      tableName:'securitygroups_users',
      timestamps: false,
    });
    securitygroupsUsers.associate = (models) => {
      
    };
    return securitygroupsUsers;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("securitygroupsUsers", new Schema({
    
    
    
    securitygroup_id: {type: String},
    
    user_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    primary_group: {type: Number},
    
    noninheritable: {type: Number},
    
    
  }),'securitygroups_users');
  //</es-section>
