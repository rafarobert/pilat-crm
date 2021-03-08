/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Mar 07 2021 15:35:31 GMT-0400 (Bolivia Time)
 * Time: 15:35:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Mar 07 2021 15:35:31 GMT-0400 (Bolivia Time)
 * Last time updated: 15:35:31
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosQuotes = sequelize.define('aosQuotes', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      number: DataTypes.INTEGER,
      
      
      
      name: DataTypes.STRING,
      
      billing_address_street: DataTypes.STRING,
      
      billing_address_city: DataTypes.STRING,
      
      billing_address_state: DataTypes.STRING,
      
      billing_address_postalcode: DataTypes.STRING,
      
      billing_address_country: DataTypes.STRING,
      
      shipping_address_street: DataTypes.STRING,
      
      shipping_address_city: DataTypes.STRING,
      
      shipping_address_state: DataTypes.STRING,
      
      shipping_address_postalcode: DataTypes.STRING,
      
      shipping_address_country: DataTypes.STRING,
      
      shipping_tax: DataTypes.STRING,
      
      stage: DataTypes.STRING,
      
      term: DataTypes.STRING,
      
      approval_status: DataTypes.STRING,
      
      invoice_status: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      approval_issue: DataTypes.TEXT,
      
      template_ddown_c: DataTypes.TEXT,
      
      terms_c: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      expiration: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      billing_account_id: DataTypes.CHAR,
      
      billing_contact_id: DataTypes.CHAR,
      
      opportunity_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      
      
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
      
      subtotal_tax_amount: DataTypes.DECIMAL,
      
      subtotal_tax_amount_usdollar: DataTypes.DECIMAL,
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_quotes',
      timestamps: false,
    });
    aosQuotes.associate = (models) => {
      
    };
    return aosQuotes;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosQuotes", new Schema({
    
    number: {type: Number},
    
    
    
    name: {type: String},
    
    billing_address_street: {type: String},
    
    billing_address_city: {type: String},
    
    billing_address_state: {type: String},
    
    billing_address_postalcode: {type: String},
    
    billing_address_country: {type: String},
    
    shipping_address_street: {type: String},
    
    shipping_address_city: {type: String},
    
    shipping_address_state: {type: String},
    
    shipping_address_postalcode: {type: String},
    
    shipping_address_country: {type: String},
    
    shipping_tax: {type: String},
    
    stage: {type: String},
    
    term: {type: String},
    
    approval_status: {type: String},
    
    invoice_status: {type: String},
    
    
    description: {type: String},
    
    approval_issue: {type: String},
    
    template_ddown_c: {type: String},
    
    terms_c: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    expiration: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    billing_account_id: {type: String},
    
    billing_contact_id: {type: String},
    
    opportunity_id: {type: String},
    
    currency_id: {type: String},
    
    
    
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
    
    subtotal_tax_amount: {type: mongoose.Types.Decimal128},
    
    subtotal_tax_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    
    deleted: {type: Number},
    
    
  }),'aos_quotes');
  //</es-section>
