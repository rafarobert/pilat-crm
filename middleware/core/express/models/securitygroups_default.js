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
    const securitygroupsDefault = sequelize.define('securitygroupsDefault', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      module: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      securitygroup_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'securitygroups_default',
      timestamps: false,
    });
    securitygroupsDefault.associate = (models) => {
      
    };
    return securitygroupsDefault;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("securitygroupsDefault", new Schema({
    
    
    
    module: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    securitygroup_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'securitygroups_default');
  //</es-section>
