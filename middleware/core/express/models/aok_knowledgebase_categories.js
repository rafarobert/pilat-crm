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
    const aokKnowledgebaseCategories = sequelize.define('aokKnowledgebaseCategories', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      aok_knowledgebase_id: DataTypes.STRING,
      
      aok_knowledge_base_categories_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aok_knowledgebase_categories',
      timestamps: false,
    });
    aokKnowledgebaseCategories.associate = (models) => {
      
    };
    return aokKnowledgebaseCategories;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aokKnowledgebaseCategories", new Schema({
    
    
    
    aok_knowledgebase_id: {type: String},
    
    aok_knowledge_base_categories_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aok_knowledgebase_categories');
  //</es-section>
