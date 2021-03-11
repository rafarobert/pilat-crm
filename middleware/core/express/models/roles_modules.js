/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:39 GMT-0400 (Bolivia Time)
 * Time: 14:57:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:39 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:39
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const rolesModules = sequelize.define('rolesModules', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      role_id: DataTypes.STRING,
      
      module_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      allow: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'roles_modules',
      timestamps: false,
    });
    rolesModules.associate = (models) => {
      
    };
    return rolesModules;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("rolesModules", new Schema({
    
    
    
    role_id: {type: String},
    
    module_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    allow: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'roles_modules');
  //</es-section>
