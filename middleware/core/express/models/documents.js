/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:36:54 GMT-0400 (Bolivia Time)
 * Time: 18:36:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:36:54 GMT-0400 (Bolivia Time)
 * Last time updated: 18:36:54
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const documents = sequelize.define('documents', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      document_name: DataTypes.STRING,
      
      doc_id: DataTypes.STRING,
      
      doc_type: DataTypes.STRING,
      
      doc_url: DataTypes.STRING,
      
      category_id: DataTypes.STRING,
      
      subcategory_id: DataTypes.STRING,
      
      status_id: DataTypes.STRING,
      
      document_revision_id: DataTypes.STRING,
      
      template_type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      active_date: DataTypes.DATE,
      
      exp_date: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      related_doc_id: DataTypes.CHAR,
      
      related_doc_rev_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      is_template: DataTypes.TINYINT,
      
      
    }, {
      tableName:'documents',
      timestamps: false,
    });
    documents.associate = (models) => {
      
    };
    return documents;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("documents", new Schema({
    
    
    
    document_name: {type: String},
    
    doc_id: {type: String},
    
    doc_type: {type: String},
    
    doc_url: {type: String},
    
    category_id: {type: String},
    
    subcategory_id: {type: String},
    
    status_id: {type: String},
    
    document_revision_id: {type: String},
    
    template_type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    active_date: {type: Date},
    
    exp_date: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    related_doc_id: {type: String},
    
    related_doc_rev_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    is_template: {type: Number},
    
    
  }),'documents');
  //</es-section>
