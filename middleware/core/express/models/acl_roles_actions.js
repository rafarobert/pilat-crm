/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:46 GMT-0400 (Bolivia Time)
 * Time: 4:41:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:46 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:46
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aclRolesActions = sequelize.define('aclRolesActions', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      access_override: DataTypes.INTEGER,
      
      
      
      role_id: DataTypes.STRING,
      
      action_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'acl_roles_actions',
      timestamps: false,
    });
    aclRolesActions.associate = (models) => {
      
    };
    return aclRolesActions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aclRolesActions", new Schema({
    
    access_override: {type: Number},
    
    
    
    role_id: {type: String},
    
    action_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'acl_roles_actions');
  //</es-section>
