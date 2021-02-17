/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:20 GMT-0400 (Bolivia Time)
 * Time: 4:43:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:20 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:20
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const jjwgAreas = sequelize.define('jjwgAreas', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      city: DataTypes.STRING,
      
      state: DataTypes.STRING,
      
      country: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      coordinates: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'jjwg_areas',
      timestamps: false,
    });
    jjwgAreas.associate = (models) => {
      
    };
    return jjwgAreas;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("jjwgAreas", new Schema({
    
    
    
    name: {type: String},
    
    city: {type: String},
    
    state: {type: String},
    
    country: {type: String},
    
    
    description: {type: String},
    
    coordinates: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'jjwg_areas');
  //</es-section>
