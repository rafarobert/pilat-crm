/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:45 GMT-0400 (Bolivia Time)
 * Time: 0:23:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:45
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const securitygroups = sequelize.define('securitygroups', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      noninheritable: DataTypes.TINYINT,
      
      
    }, {
      tableName:'securitygroups',
      timestamps: false,
    });
    securitygroups.associate = (models) => {
      
    };
    return securitygroups;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("securitygroups", new Schema({
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    noninheritable: {type: Number},
    
    
  }),'securitygroups');
  //</es-section>
