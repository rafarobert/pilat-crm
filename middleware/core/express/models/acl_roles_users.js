/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:53 GMT-0400 (Bolivia Time)
 * Time: 0:21:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:53 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:53
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aclRolesUsers = sequelize.define('aclRolesUsers', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      role_id: DataTypes.STRING,
      
      user_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'acl_roles_users',
      timestamps: false,
    });
    aclRolesUsers.associate = (models) => {
      
    };
    return aclRolesUsers;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aclRolesUsers", new Schema({
    
    
    
    role_id: {type: String},
    
    user_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'acl_roles_users');
  //</es-section>
