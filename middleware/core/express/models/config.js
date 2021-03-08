/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Time: 15:35:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:49 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:49
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const config = sequelize.define('config', {
      
      
      
      
      
      category: DataTypes.STRING,
      
      name: DataTypes.STRING,
      
      
      value: DataTypes.TEXT,
      
      
      
      
      
      
      
      
      
    }, {
      tableName:'config',
      timestamps: false,
    });
    config.associate = (models) => {
      
    };
    return config;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("config", new Schema({
    
    
    
    category: {type: String},
    
    name: {type: String},
    
    
    value: {type: String},
    
    
    
    
    
    
    
    
    
    
  }),'config');
  //</es-section>
