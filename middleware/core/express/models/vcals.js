/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:25 GMT-0400 (Bolivia Time)
 * Time: 4:44:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:25 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:25
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const vcals = sequelize.define('vcals', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      type: DataTypes.STRING,
      
      source: DataTypes.STRING,
      
      
      content: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'vcals',
      timestamps: false,
    });
    vcals.associate = (models) => {
      
    };
    return vcals;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("vcals", new Schema({
    
    
    
    type: {type: String},
    
    source: {type: String},
    
    
    content: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'vcals');
  //</es-section>