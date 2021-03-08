/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:23 GMT-0400 (Bolivia Time)
 * Time: 15:36:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:23 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:23
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const jjwgMaps = sequelize.define('jjwgMaps', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      unit_type: DataTypes.STRING,
      
      module_type: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      
      distance: DataTypes.FLOAT,
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'jjwg_maps',
      timestamps: false,
    });
    jjwgMaps.associate = (models) => {
      
    };
    return jjwgMaps;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("jjwgMaps", new Schema({
    
    
    
    name: {type: String},
    
    unit_type: {type: String},
    
    module_type: {type: String},
    
    parent_type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    parent_id: {type: String},
    
    
    distance: {type: mongoose.Types.Decimal128},
    
    
    
    deleted: {type: Number},
    
    
  }),'jjwg_maps');
  //</es-section>
