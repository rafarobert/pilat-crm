/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Time: 14:0:29
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:29 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:29
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const bugs = sequelize.define('bugs', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      bug_number: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      priority: DataTypes.STRING,
      
      resolution: DataTypes.STRING,
      
      found_in_release: DataTypes.STRING,
      
      fixed_in_release: DataTypes.STRING,
      
      source: DataTypes.STRING,
      
      product_category: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      work_log: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'bugs',
      timestamps: false,
    });
    bugs.associate = (models) => {
      
    };
    return bugs;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("bugs", new Schema({
    
    bug_number: {type: Number},
    
    
    
    name: {type: String},
    
    type: {type: String},
    
    status: {type: String},
    
    priority: {type: String},
    
    resolution: {type: String},
    
    found_in_release: {type: String},
    
    fixed_in_release: {type: String},
    
    source: {type: String},
    
    product_category: {type: String},
    
    
    description: {type: String},
    
    work_log: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'bugs');
  //</es-section>
