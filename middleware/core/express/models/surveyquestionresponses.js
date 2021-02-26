/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:49 GMT-0400 (Bolivia Time)
 * Time: 0:23:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:49 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:49
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const surveyquestionresponses = sequelize.define('surveyquestionresponses', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      answer: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      answer_datetime: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      surveyquestion_id: DataTypes.CHAR,
      
      surveyresponse_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      answer_bool: DataTypes.TINYINT,
      
      
    }, {
      tableName:'surveyquestionresponses',
      timestamps: false,
    });
    surveyquestionresponses.associate = (models) => {
      
    };
    return surveyquestionresponses;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("surveyquestionresponses", new Schema({
    
    
    
    name: {type: String},
    
    
    description: {type: String},
    
    answer: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    answer_datetime: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    surveyquestion_id: {type: String},
    
    surveyresponse_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    answer_bool: {type: Number},
    
    
  }),'surveyquestionresponses');
  //</es-section>
