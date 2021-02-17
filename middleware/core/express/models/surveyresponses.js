/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:16 GMT-0400 (Bolivia Time)
 * Time: 4:44:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:16 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:16
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const surveyresponses = sequelize.define('surveyresponses', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      happiness: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      account_id: DataTypes.CHAR,
      
      campaign_id: DataTypes.CHAR,
      
      contact_id: DataTypes.CHAR,
      
      survey_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      email_response_sent: DataTypes.TINYINT,
      
      
    }, {
      tableName:'surveyresponses',
      timestamps: false,
    });
    surveyresponses.associate = (models) => {
      
    };
    return surveyresponses;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("surveyresponses", new Schema({
    
    happiness: {type: Number},
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    account_id: {type: String},
    
    campaign_id: {type: String},
    
    contact_id: {type: String},
    
    survey_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    email_response_sent: {type: Number},
    
    
  }),'surveyresponses');
  //</es-section>
