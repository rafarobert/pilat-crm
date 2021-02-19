/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:46 GMT-0400 (Bolivia Time)
 * Time: 18:35:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:46 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:46
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aopCaseUpdates = sequelize.define('aopCaseUpdates', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      case_id: DataTypes.CHAR,
      
      contact_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      internal: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aop_case_updates',
      timestamps: false,
    });
    aopCaseUpdates.associate = (models) => {
      
    };
    return aopCaseUpdates;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aopCaseUpdates", new Schema({
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    case_id: {type: String},
    
    contact_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    internal: {type: Number},
    
    
  }),'aop_case_updates');
  //</es-section>
