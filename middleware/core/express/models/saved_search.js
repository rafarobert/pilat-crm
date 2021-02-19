/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:06 GMT-0400 (Bolivia Time)
 * Time: 4:44:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:06 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:6
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const savedSearch = sequelize.define('savedSearch', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      search_module: DataTypes.STRING,
      
      
      contents: DataTypes.TEXT,
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'saved_search',
      timestamps: false,
    });
    savedSearch.associate = (models) => {
      
    };
    return savedSearch;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("savedSearch", new Schema({
    
    
    
    name: {type: String},
    
    search_module: {type: String},
    
    
    contents: {type: String},
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'saved_search');
  //</es-section>
