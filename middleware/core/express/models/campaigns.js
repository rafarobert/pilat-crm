/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:31 GMT-0400 (Bolivia Time)
 * Time: 14:56:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:31 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:31
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const campaigns = sequelize.define('campaigns', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      tracker_key: DataTypes.INTEGER,
      
      tracker_count: DataTypes.INTEGER,
      
      impressions: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      refer_url: DataTypes.STRING,
      
      tracker_text: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      campaign_type: DataTypes.STRING,
      
      frequency: DataTypes.STRING,
      
      
      objective: DataTypes.TEXT,
      
      content: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      start_date: DataTypes.DATE,
      
      end_date: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      survey_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
      budget: DataTypes.DOUBLE,
      
      expected_cost: DataTypes.DOUBLE,
      
      actual_cost: DataTypes.DOUBLE,
      
      expected_revenue: DataTypes.DOUBLE,
      
    }, {
      tableName:'campaigns',
      timestamps: false,
    });
    campaigns.associate = (models) => {
      
    };
    return campaigns;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("campaigns", new Schema({
    
    tracker_key: {type: Number},
    
    tracker_count: {type: Number},
    
    impressions: {type: Number},
    
    
    
    name: {type: String},
    
    refer_url: {type: String},
    
    tracker_text: {type: String},
    
    status: {type: String},
    
    campaign_type: {type: String},
    
    frequency: {type: String},
    
    
    objective: {type: String},
    
    content: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    start_date: {type: Date},
    
    end_date: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    currency_id: {type: String},
    
    survey_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
    budget: {type: mongoose.Types.Decimal128},
    
    expected_cost: {type: mongoose.Types.Decimal128},
    
    actual_cost: {type: mongoose.Types.Decimal128},
    
    expected_revenue: {type: mongoose.Types.Decimal128},
    
  }),'campaigns');
  //</es-section>
