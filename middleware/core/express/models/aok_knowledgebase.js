/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:07 GMT-0400 (Bolivia Time)
 * Time: 14:0:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:07 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:7
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aokKnowledgebase = sequelize.define('aokKnowledgebase', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      revision: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      additional_info: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      user_id_c: DataTypes.CHAR,
      
      user_id1_c: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aok_knowledgebase',
      timestamps: false,
    });
    aokKnowledgebase.associate = (models) => {
      
    };
    return aokKnowledgebase;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aokKnowledgebase", new Schema({
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    revision: {type: String},
    
    
    description: {type: String},
    
    additional_info: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    user_id_c: {type: String},
    
    user_id1_c: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aok_knowledgebase');
  //</es-section>
