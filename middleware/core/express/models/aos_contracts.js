/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:58 GMT-0400 (Bolivia Time)
 * Time: 18:35:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:58 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:58
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosContracts = sequelize.define('aosContracts', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      reference_code: DataTypes.STRING,
      
      status: DataTypes.STRING,
      
      contract_type: DataTypes.STRING,
      
      shipping_tax: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      start_date: DataTypes.DATE,
      
      end_date: DataTypes.DATE,
      
      customer_signed_date: DataTypes.DATE,
      
      company_signed_date: DataTypes.DATE,
      
      renewal_reminder_date: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      contract_account_id: DataTypes.CHAR,
      
      opportunity_id: DataTypes.CHAR,
      
      contact_id: DataTypes.CHAR,
      
      call_id: DataTypes.CHAR,
      
      
      
      total_contract_value: DataTypes.DECIMAL,
      
      total_contract_value_usdollar: DataTypes.DECIMAL,
      
      total_amt: DataTypes.DECIMAL,
      
      total_amt_usdollar: DataTypes.DECIMAL,
      
      subtotal_amount: DataTypes.DECIMAL,
      
      subtotal_amount_usdollar: DataTypes.DECIMAL,
      
      discount_amount: DataTypes.DECIMAL,
      
      discount_amount_usdollar: DataTypes.DECIMAL,
      
      tax_amount: DataTypes.DECIMAL,
      
      tax_amount_usdollar: DataTypes.DECIMAL,
      
      shipping_amount: DataTypes.DECIMAL,
      
      shipping_amount_usdollar: DataTypes.DECIMAL,
      
      shipping_tax_amt: DataTypes.DECIMAL,
      
      shipping_tax_amt_usdollar: DataTypes.DECIMAL,
      
      total_amount: DataTypes.DECIMAL,
      
      total_amount_usdollar: DataTypes.DECIMAL,
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_contracts',
      timestamps: false,
    });
    aosContracts.associate = (models) => {
      
    };
    return aosContracts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosContracts", new Schema({
    
    
    
    name: {type: String},
    
    reference_code: {type: String},
    
    status: {type: String},
    
    contract_type: {type: String},
    
    shipping_tax: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    start_date: {type: Date},
    
    end_date: {type: Date},
    
    customer_signed_date: {type: Date},
    
    company_signed_date: {type: Date},
    
    renewal_reminder_date: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    currency_id: {type: String},
    
    contract_account_id: {type: String},
    
    opportunity_id: {type: String},
    
    contact_id: {type: String},
    
    call_id: {type: String},
    
    
    
    total_contract_value: {type: mongoose.Types.Decimal128},
    
    total_contract_value_usdollar: {type: mongoose.Types.Decimal128},
    
    total_amt: {type: mongoose.Types.Decimal128},
    
    total_amt_usdollar: {type: mongoose.Types.Decimal128},
    
    subtotal_amount: {type: mongoose.Types.Decimal128},
    
    subtotal_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    discount_amount: {type: mongoose.Types.Decimal128},
    
    discount_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    tax_amount: {type: mongoose.Types.Decimal128},
    
    tax_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    shipping_amount: {type: mongoose.Types.Decimal128},
    
    shipping_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    shipping_tax_amt: {type: mongoose.Types.Decimal128},
    
    shipping_tax_amt_usdollar: {type: mongoose.Types.Decimal128},
    
    total_amount: {type: mongoose.Types.Decimal128},
    
    total_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    
    deleted: {type: Number},
    
    
  }),'aos_contracts');
  //</es-section>
