/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:58 GMT-0400 (Bolivia Time)
 * Time: 14:0:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:58 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:58
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const importMaps = sequelize.define('importMaps', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      source: DataTypes.STRING,
      
      enclosure: DataTypes.STRING,
      
      delimiter: DataTypes.STRING,
      
      module: DataTypes.STRING,
      
      is_published: DataTypes.STRING,
      
      
      content: DataTypes.TEXT,
      
      default_values: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      has_header: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'import_maps',
      timestamps: false,
    });
    importMaps.associate = (models) => {
      
    };
    return importMaps;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("importMaps", new Schema({
    
    
    
    name: {type: String},
    
    source: {type: String},
    
    enclosure: {type: String},
    
    delimiter: {type: String},
    
    module: {type: String},
    
    is_published: {type: String},
    
    
    content: {type: String},
    
    default_values: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    assigned_user_id: {type: String},
    
    
    
    
    has_header: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'import_maps');
  //</es-section>
