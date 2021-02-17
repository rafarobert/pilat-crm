/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:14 GMT-0400 (Bolivia Time)
 * Time: 4:42:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:14 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:14
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosPdfTemplates = sequelize.define('aosPdfTemplates', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      margin_left: DataTypes.INTEGER,
      
      margin_right: DataTypes.INTEGER,
      
      margin_top: DataTypes.INTEGER,
      
      margin_bottom: DataTypes.INTEGER,
      
      margin_header: DataTypes.INTEGER,
      
      margin_footer: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      page_size: DataTypes.STRING,
      
      orientation: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      pdfheader: DataTypes.TEXT,
      
      pdffooter: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      active: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_pdf_templates',
      timestamps: false,
    });
    aosPdfTemplates.associate = (models) => {
      
    };
    return aosPdfTemplates;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosPdfTemplates", new Schema({
    
    margin_left: {type: Number},
    
    margin_right: {type: Number},
    
    margin_top: {type: Number},
    
    margin_bottom: {type: Number},
    
    margin_header: {type: Number},
    
    margin_footer: {type: Number},
    
    
    
    name: {type: String},
    
    type: {type: String},
    
    page_size: {type: String},
    
    orientation: {type: String},
    
    
    description: {type: String},
    
    pdfheader: {type: String},
    
    pdffooter: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    active: {type: Number},
    
    
  }),'aos_pdf_templates');
  //</es-section>
