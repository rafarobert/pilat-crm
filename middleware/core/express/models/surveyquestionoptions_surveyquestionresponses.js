/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:37:04 GMT-0400 (Bolivia Time)
 * Time: 15:37:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:37:04 GMT-0400 (Bolivia Time)
 * Last time updated: 15:37:4
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const surveyquestionoptionsSurveyquestionresponses = sequelize.define('surveyquestionoptionsSurveyquestionresponses', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      surveyq72c7options_ida: DataTypes.STRING,
      
      surveyq10d4sponses_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'surveyquestionoptions_surveyquestionresponses',
      timestamps: false,
    });
    surveyquestionoptionsSurveyquestionresponses.associate = (models) => {
      
    };
    return surveyquestionoptionsSurveyquestionresponses;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("surveyquestionoptionsSurveyquestionresponses", new Schema({
    
    
    
    surveyq72c7options_ida: {type: String},
    
    surveyq10d4sponses_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'surveyquestionoptions_surveyquestionresponses');
  //</es-section>
