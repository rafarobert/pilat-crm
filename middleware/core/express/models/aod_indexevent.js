/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:06 GMT-0400 (Bolivia Time)
 * Time: 14:0:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:06 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:6
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aodIndexevent = sequelize.define('aodIndexevent', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      error: DataTypes.STRING,
      
      record_module: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      record_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      success: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aod_indexevent',
      timestamps: false,
    });
    aodIndexevent.associate = (models) => {
      
    };
    return aodIndexevent;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aodIndexevent", new Schema({
    
    
    
    name: {type: String},
    
    error: {type: String},
    
    record_module: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    record_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    success: {type: Number},
    
    
  }),'aod_indexevent');
  //</es-section>
