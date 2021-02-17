/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:08 GMT-0400 (Bolivia Time)
 * Time: 4:44:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:08 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:8
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const securitygroupsAclRoles = sequelize.define('securitygroupsAclRoles', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      securitygroup_id: DataTypes.CHAR,
      
      role_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'securitygroups_acl_roles',
      timestamps: false,
    });
    securitygroupsAclRoles.associate = (models) => {
      
    };
    return securitygroupsAclRoles;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("securitygroupsAclRoles", new Schema({
    
    
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    securitygroup_id: {type: String},
    
    role_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'securitygroups_acl_roles');
  //</es-section>