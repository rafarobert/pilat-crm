/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:41 GMT-0400 (Bolivia Time)
 * Time: 4:42:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:41 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:41
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const cases = sequelize.define('cases', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      case_number: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      priority: DataTypes.STRING,
      
      state: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      resolution: DataTypes.TEXT,
      
      work_log: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      account_id: DataTypes.CHAR,
      
      contact_created_by_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'cases',
      timestamps: false,
    });
    cases.associate = (models) => {
      
    };
    return cases;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("cases", new Schema({
    
    case_number: {type: Number},
    
    
    
    name: {type: String},
    
    type: {type: String},
    
    status: {type: String},
    
    priority: {type: String},
    
    state: {type: String},
    
    
    description: {type: String},
    
    resolution: {type: String},
    
    work_log: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    account_id: {type: String},
    
    contact_created_by_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'cases');
  //</es-section>
