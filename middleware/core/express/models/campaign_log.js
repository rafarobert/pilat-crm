/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:33 GMT-0400 (Bolivia Time)
 * Time: 14:56:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:33 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:33
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const campaignLog = sequelize.define('campaignLog', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      hits: DataTypes.INTEGER,
      
      
      
      target_tracker_key: DataTypes.STRING,
      
      target_id: DataTypes.STRING,
      
      target_type: DataTypes.STRING,
      
      activity_type: DataTypes.STRING,
      
      related_id: DataTypes.STRING,
      
      related_type: DataTypes.STRING,
      
      more_information: DataTypes.STRING,
      
      
      
      
      activity_date: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      campaign_id: DataTypes.CHAR,
      
      list_id: DataTypes.CHAR,
      
      marketing_id: DataTypes.CHAR,
      
      
      
      
      archived: DataTypes.TINYINT,
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'campaign_log',
      timestamps: false,
    });
    campaignLog.associate = (models) => {
      
    };
    return campaignLog;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("campaignLog", new Schema({
    
    hits: {type: Number},
    
    
    
    target_tracker_key: {type: String},
    
    target_id: {type: String},
    
    target_type: {type: String},
    
    activity_type: {type: String},
    
    related_id: {type: String},
    
    related_type: {type: String},
    
    more_information: {type: String},
    
    
    
    
    
    activity_date: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    campaign_id: {type: String},
    
    list_id: {type: String},
    
    marketing_id: {type: String},
    
    
    
    
    archived: {type: Number},
    
    deleted: {type: Number},
    
    
  }),'campaign_log');
  //</es-section>
