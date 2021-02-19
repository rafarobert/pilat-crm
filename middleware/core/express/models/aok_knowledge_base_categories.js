/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:42 GMT-0400 (Bolivia Time)
 * Time: 18:35:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:42 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:42
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aokKnowledgeBaseCategories = sequelize.define('aokKnowledgeBaseCategories', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aok_knowledge_base_categories',
      timestamps: false,
    });
    aokKnowledgeBaseCategories.associate = (models) => {
      
    };
    return aokKnowledgeBaseCategories;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aokKnowledgeBaseCategories", new Schema({
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aok_knowledge_base_categories');
  //</es-section>
