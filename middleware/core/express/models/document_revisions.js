/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Time: 0:22:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:45 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:45
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const documentRevisions = sequelize.define('documentRevisions', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      change_log: DataTypes.STRING,
      
      document_id: DataTypes.STRING,
      
      doc_id: DataTypes.STRING,
      
      doc_type: DataTypes.STRING,
      
      doc_url: DataTypes.STRING,
      
      filename: DataTypes.STRING,
      
      file_ext: DataTypes.STRING,
      
      file_mime_type: DataTypes.STRING,
      
      revision: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'document_revisions',
      timestamps: false,
    });
    documentRevisions.associate = (models) => {
      
    };
    return documentRevisions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("documentRevisions", new Schema({
    
    
    
    change_log: {type: String},
    
    document_id: {type: String},
    
    doc_id: {type: String},
    
    doc_type: {type: String},
    
    doc_url: {type: String},
    
    filename: {type: String},
    
    file_ext: {type: String},
    
    file_mime_type: {type: String},
    
    revision: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'document_revisions');
  //</es-section>
