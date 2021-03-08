/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Time: 15:36:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:54 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:54
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const relationships = sequelize.define('relationships', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      relationship_name: DataTypes.STRING,
      
      lhs_module: DataTypes.STRING,
      
      lhs_table: DataTypes.STRING,
      
      lhs_key: DataTypes.STRING,
      
      rhs_module: DataTypes.STRING,
      
      rhs_table: DataTypes.STRING,
      
      rhs_key: DataTypes.STRING,
      
      join_table: DataTypes.STRING,
      
      join_key_lhs: DataTypes.STRING,
      
      join_key_rhs: DataTypes.STRING,
      
      relationship_type: DataTypes.STRING,
      
      relationship_role_column: DataTypes.STRING,
      
      relationship_role_column_value: DataTypes.STRING,
      
      
      
      
      
      
      
      
      
      reverse: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'relationships',
      timestamps: false,
    });
    relationships.associate = (models) => {
      
    };
    return relationships;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("relationships", new Schema({
    
    
    
    relationship_name: {type: String},
    
    lhs_module: {type: String},
    
    lhs_table: {type: String},
    
    lhs_key: {type: String},
    
    rhs_module: {type: String},
    
    rhs_table: {type: String},
    
    rhs_key: {type: String},
    
    join_table: {type: String},
    
    join_key_lhs: {type: String},
    
    join_key_rhs: {type: String},
    
    relationship_type: {type: String},
    
    relationship_role_column: {type: String},
    
    relationship_role_column_value: {type: String},
    
    
    
    
    
    
    
    
    
    
    reverse: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'relationships');
  //</es-section>
