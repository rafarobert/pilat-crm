/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:36:37 GMT-0400 (Bolivia Time)
 * Time: 15:36:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:36:37 GMT-0400 (Bolivia Time)
 * Last time updated: 15:36:37
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const opportunities = sequelize.define('opportunities', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      opportunity_type: DataTypes.STRING,
      
      lead_source: DataTypes.STRING,
      
      next_step: DataTypes.STRING,
      
      sales_stage: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      date_closed: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      campaign_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
      amount: DataTypes.DOUBLE,
      
      amount_usdollar: DataTypes.DOUBLE,
      
      probability: DataTypes.DOUBLE,
      
    }, {
      tableName:'opportunities',
      timestamps: false,
    });
    opportunities.associate = (models) => {
      
    };
    return opportunities;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("opportunities", new Schema({
    
    
    
    name: {type: String},
    
    opportunity_type: {type: String},
    
    lead_source: {type: String},
    
    next_step: {type: String},
    
    sales_stage: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    date_closed: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    campaign_id: {type: String},
    
    currency_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
    amount: {type: mongoose.Types.Decimal128},
    
    amount_usdollar: {type: mongoose.Types.Decimal128},
    
    probability: {type: mongoose.Types.Decimal128},
    
  }),'opportunities');
  //</es-section>
