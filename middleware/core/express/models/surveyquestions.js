/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:50 GMT-0400 (Bolivia Time)
 * Time: 0:23:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:50 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:50
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const surveyquestions = sequelize.define('surveyquestions', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      sort_order: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      survey_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      happiness_question: DataTypes.TINYINT,
      
      
    }, {
      tableName:'surveyquestions',
      timestamps: false,
    });
    surveyquestions.associate = (models) => {
      
    };
    return surveyquestions;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("surveyquestions", new Schema({
    
    sort_order: {type: Number},
    
    
    
    name: {type: String},
    
    type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    survey_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    happiness_question: {type: Number},
    
    
  }),'surveyquestions');
  //</es-section>
