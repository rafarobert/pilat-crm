/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Time: 18:38:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:35 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:35
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const roles = sequelize.define('roles', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      modules: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'roles',
      timestamps: false,
    });
    roles.associate = (models) => {
      
    };
    return roles;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("roles", new Schema({
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    modules: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'roles');
  //</es-section>
