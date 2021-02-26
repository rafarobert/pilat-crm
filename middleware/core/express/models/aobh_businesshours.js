/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:21:59 GMT-0400 (Bolivia Time)
 * Time: 0:21:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:21:59 GMT-0400 (Bolivia Time)
 * Last time updated: 0:21:59
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aobhBusinesshours = sequelize.define('aobhBusinesshours', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      opening_hours: DataTypes.STRING,
      
      closing_hours: DataTypes.STRING,
      
      day: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      open: DataTypes.TINYINT,
      
      open_status: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aobh_businesshours',
      timestamps: false,
    });
    aobhBusinesshours.associate = (models) => {
      
    };
    return aobhBusinesshours;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aobhBusinesshours", new Schema({
    
    
    
    name: {type: String},
    
    opening_hours: {type: String},
    
    closing_hours: {type: String},
    
    day: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    open: {type: Number},
    
    open_status: {type: Number},
    
    
  }),'aobh_businesshours');
  //</es-section>
