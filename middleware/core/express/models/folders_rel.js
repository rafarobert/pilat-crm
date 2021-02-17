/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:08 GMT-0400 (Bolivia Time)
 * Time: 4:43:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:08 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:8
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const foldersRel = sequelize.define('foldersRel', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      polymorphic_module: DataTypes.STRING,
      
      
      
      
      
      
      folder_id: DataTypes.CHAR,
      
      polymorphic_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'folders_rel',
      timestamps: false,
    });
    foldersRel.associate = (models) => {
      
    };
    return foldersRel;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("foldersRel", new Schema({
    
    
    
    polymorphic_module: {type: String},
    
    
    
    
    
    
    
    folder_id: {type: String},
    
    polymorphic_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'folders_rel');
  //</es-section>