/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:22:15 GMT-0400 (Bolivia Time)
 * Time: 0:22:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:22:15 GMT-0400 (Bolivia Time)
 * Last time updated: 0:22:15
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosLineItemGroups = sequelize.define('aosLineItemGroups', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      number: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      
      
      total_amt: DataTypes.DECIMAL,
      
      total_amt_usdollar: DataTypes.DECIMAL,
      
      discount_amount: DataTypes.DECIMAL,
      
      discount_amount_usdollar: DataTypes.DECIMAL,
      
      subtotal_amount: DataTypes.DECIMAL,
      
      subtotal_amount_usdollar: DataTypes.DECIMAL,
      
      tax_amount: DataTypes.DECIMAL,
      
      tax_amount_usdollar: DataTypes.DECIMAL,
      
      subtotal_tax_amount: DataTypes.DECIMAL,
      
      subtotal_tax_amount_usdollar: DataTypes.DECIMAL,
      
      total_amount: DataTypes.DECIMAL,
      
      total_amount_usdollar: DataTypes.DECIMAL,
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_line_item_groups',
      timestamps: false,
    });
    aosLineItemGroups.associate = (models) => {
      
    };
    return aosLineItemGroups;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosLineItemGroups", new Schema({
    
    number: {type: Number},
    
    
    
    name: {type: String},
    
    parent_type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    parent_id: {type: String},
    
    currency_id: {type: String},
    
    
    
    total_amt: {type: mongoose.Types.Decimal128},
    
    total_amt_usdollar: {type: mongoose.Types.Decimal128},
    
    discount_amount: {type: mongoose.Types.Decimal128},
    
    discount_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    subtotal_amount: {type: mongoose.Types.Decimal128},
    
    subtotal_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    tax_amount: {type: mongoose.Types.Decimal128},
    
    tax_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    subtotal_tax_amount: {type: mongoose.Types.Decimal128},
    
    subtotal_tax_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    total_amount: {type: mongoose.Types.Decimal128},
    
    total_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    
    deleted: {type: Number},
    
    
  }),'aos_line_item_groups');
  //</es-section>
