/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:35 GMT-0400 (Bolivia Time)
 * Time: 4:43:35
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:35 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:35
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const notes = sequelize.define('notes', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      file_mime_type: DataTypes.STRING,
      
      filename: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      contact_id: DataTypes.CHAR,
      
      
      
      
      portal_flag: DataTypes.TINYINT,
      
      embed_flag: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'notes',
      timestamps: false,
    });
    notes.associate = (models) => {
      
    };
    return notes;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("notes", new Schema({
    
    
    
    name: {type: String},
    
    file_mime_type: {type: String},
    
    filename: {type: String},
    
    parent_type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    assigned_user_id: {type: String},
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    parent_id: {type: String},
    
    contact_id: {type: String},
    
    
    
    
    portal_flag: {type: Number},
    
    embed_flag: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'notes');
  //</es-section>
