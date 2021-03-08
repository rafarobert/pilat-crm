/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:55 GMT-0400 (Bolivia Time)
 * Time: 15:36:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:55 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:55
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const releases = sequelize.define('releases', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      list_order: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'releases',
      timestamps: false,
    });
    releases.associate = (models) => {
      
    };
    return releases;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("releases", new Schema({
    
    list_order: {type: Number},
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'releases');
  //</es-section>
