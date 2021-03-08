/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:57 GMT-0400 (Bolivia Time)
 * Time: 15:36:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:57 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:57
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const rolesUsers = sequelize.define('rolesUsers', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      role_id: DataTypes.STRING,
      
      user_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'roles_users',
      timestamps: false,
    });
    rolesUsers.associate = (models) => {
      
    };
    return rolesUsers;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("rolesUsers", new Schema({
    
    
    
    role_id: {type: String},
    
    user_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'roles_users');
  //</es-section>
