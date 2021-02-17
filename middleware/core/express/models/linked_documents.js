/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:31 GMT-0400 (Bolivia Time)
 * Time: 4:43:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:31 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:31
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const linkedDocuments = sequelize.define('linkedDocuments', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      parent_id: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      document_id: DataTypes.STRING,
      
      document_revision_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'linked_documents',
      timestamps: false,
    });
    linkedDocuments.associate = (models) => {
      
    };
    return linkedDocuments;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("linkedDocuments", new Schema({
    
    
    
    parent_id: {type: String},
    
    parent_type: {type: String},
    
    document_id: {type: String},
    
    document_revision_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'linked_documents');
  //</es-section>