/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:57:45 GMT-0400 (Bolivia Time)
 * Time: 14:57:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:57:45 GMT-0400 (Bolivia Time)
 * Last time updated: 14:57:45
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const surveyquestionoptions = sequelize.define('surveyquestionoptions', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      sort_order: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      survey_question_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'surveyquestionoptions',
      timestamps: false,
    });
    surveyquestionoptions.associate = (models) => {
      
    };
    return surveyquestionoptions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("surveyquestionoptions", new Schema({
    
    sort_order: {type: Number},
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    survey_question_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'surveyquestionoptions');
  //</es-section>
