/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:47 GMT-0400 (Bolivia Time)
 * Time: 0:23:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:47 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:47
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const spots = sequelize.define('spots', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      config: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'spots',
      timestamps: false,
    });
    spots.associate = (models) => {
      
    };
    return spots;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("spots", new Schema({
    
    
    
    name: {type: String},
    
    type: {type: String},
    
    
    description: {type: String},
    
    config: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'spots');
  //</es-section>
