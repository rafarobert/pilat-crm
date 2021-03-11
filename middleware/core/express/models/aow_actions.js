/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Time: 14:56:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:23 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:23
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aowActions = sequelize.define('aowActions', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      action_order: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      action: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      parameters: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      aow_workflow_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aow_actions',
      timestamps: false,
    });
    aowActions.associate = (models) => {
      
    };
    return aowActions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aowActions", new Schema({
    
    action_order: {type: Number},
    
    
    
    name: {type: String},
    
    action: {type: String},
    
    
    description: {type: String},
    
    parameters: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    aow_workflow_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'aow_actions');
  //</es-section>
