/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:28 GMT-0400 (Bolivia Time)
 * Time: 18:37:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:28 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:28
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const iadStickyNotes = sequelize.define('iadStickyNotes', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      document_name: DataTypes.STRING,
      
      filename: DataTypes.STRING,
      
      file_ext: DataTypes.STRING,
      
      file_mime_type: DataTypes.STRING,
      
      category_id: DataTypes.STRING,
      
      subcategory_id: DataTypes.STRING,
      
      status_id: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      active_date: DataTypes.DATE,
      
      exp_date: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'iad_sticky_notes',
      timestamps: false,
    });
    iadStickyNotes.associate = (models) => {
      
    };
    return iadStickyNotes;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("iadStickyNotes", new Schema({
    
    
    
    document_name: {type: String},
    
    filename: {type: String},
    
    file_ext: {type: String},
    
    file_mime_type: {type: String},
    
    category_id: {type: String},
    
    subcategory_id: {type: String},
    
    status_id: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    active_date: {type: Date},
    
    exp_date: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'iad_sticky_notes');
  //</es-section>
