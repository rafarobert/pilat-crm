/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:53 GMT-0400 (Bolivia Time)
 * Time: 14:56:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:53 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:53
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const folders = sequelize.define('folders', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      folder_type: DataTypes.STRING,
      
      
      dynamic_query: DataTypes.TEXT,
      
      
      
      
      
      parent_folder: DataTypes.CHAR,
      
      assign_to_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      modified_by: DataTypes.CHAR,
      
      
      
      
      has_child: DataTypes.TINYINT,
      
      is_group: DataTypes.TINYINT,
      
      is_dynamic: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'folders',
      timestamps: false,
    });
    folders.associate = (models) => {
      
    };
    return folders;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("folders", new Schema({
    
    
    
    name: {type: String},
    
    folder_type: {type: String},
    
    
    dynamic_query: {type: String},
    
    
    
    
    
    
    parent_folder: {type: String},
    
    assign_to_id: {type: String},
    
    created_by: {type: String},
    
    modified_by: {type: String},
    
    
    
    
    has_child: {type: Number},
    
    is_group: {type: Number},
    
    is_dynamic: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'folders');
  //</es-section>
