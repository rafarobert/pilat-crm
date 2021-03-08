/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:08 GMT-0400 (Bolivia Time)
 * Time: 15:37:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:08 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:8
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const surveys = sequelize.define('surveys', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      submit_text: DataTypes.STRING,
      
      satisfied_text: DataTypes.STRING,
      
      neither_text: DataTypes.STRING,
      
      dissatisfied_text: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'surveys',
      timestamps: false,
    });
    surveys.associate = (models) => {
      
    };
    return surveys;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("surveys", new Schema({
    
    
    
    name: {type: String},
    
    status: {type: String},
    
    submit_text: {type: String},
    
    satisfied_text: {type: String},
    
    neither_text: {type: String},
    
    dissatisfied_text: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'surveys');
  //</es-section>
