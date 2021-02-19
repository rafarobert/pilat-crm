/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:30 GMT-0400 (Bolivia Time)
 * Time: 18:38:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:30 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:30
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const prospectLists = sequelize.define('prospectLists', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      list_type: DataTypes.STRING,
      
      domain_name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'prospect_lists',
      timestamps: false,
    });
    prospectLists.associate = (models) => {
      
    };
    return prospectLists;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("prospectLists", new Schema({
    
    
    
    name: {type: String},
    
    list_type: {type: String},
    
    domain_name: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    assigned_user_id: {type: String},
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'prospect_lists');
  //</es-section>
