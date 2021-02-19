/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:10 GMT-0400 (Bolivia Time)
 * Time: 18:37:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:10 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:10
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailTemplates = sequelize.define('emailTemplates', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      created_by: DataTypes.STRING,
      
      published: DataTypes.STRING,
      
      name: DataTypes.STRING,
      
      subject: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      body: DataTypes.TEXT,
      
      body_html: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      text_only: DataTypes.TINYINT,
      
      
    }, {
      tableName:'email_templates',
      timestamps: false,
    });
    emailTemplates.associate = (models) => {
      
    };
    return emailTemplates;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailTemplates", new Schema({
    
    
    
    created_by: {type: String},
    
    published: {type: String},
    
    name: {type: String},
    
    subject: {type: String},
    
    type: {type: String},
    
    
    description: {type: String},
    
    body: {type: String},
    
    body_html: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    text_only: {type: Number},
    
    
  }),'email_templates');
  //</es-section>
