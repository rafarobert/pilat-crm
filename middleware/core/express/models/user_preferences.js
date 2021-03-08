/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:15 GMT-0400 (Bolivia Time)
 * Time: 15:37:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:15 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:15
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const userPreferences = sequelize.define('userPreferences', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      category: DataTypes.STRING,
      
      
      contents: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'user_preferences',
      timestamps: false,
    });
    userPreferences.associate = (models) => {
      
    };
    return userPreferences;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("userPreferences", new Schema({
    
    
    
    category: {type: String},
    
    
    contents: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'user_preferences');
  //</es-section>
