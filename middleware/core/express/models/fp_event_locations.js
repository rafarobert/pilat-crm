/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:13 GMT-0400 (Bolivia Time)
 * Time: 4:43:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:13 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:13
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const fpEventLocations = sequelize.define('fpEventLocations', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      address: DataTypes.STRING,
      
      address_city: DataTypes.STRING,
      
      address_country: DataTypes.STRING,
      
      address_postalcode: DataTypes.STRING,
      
      address_state: DataTypes.STRING,
      
      capacity: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'fp_event_locations',
      timestamps: false,
    });
    fpEventLocations.associate = (models) => {
      
    };
    return fpEventLocations;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("fpEventLocations", new Schema({
    
    
    
    name: {type: String},
    
    address: {type: String},
    
    address_city: {type: String},
    
    address_country: {type: String},
    
    address_postalcode: {type: String},
    
    address_state: {type: String},
    
    capacity: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'fp_event_locations');
  //</es-section>
