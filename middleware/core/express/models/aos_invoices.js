/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Mar 10 2021 14:56:10 GMT-0400 (Bolivia Time)
 * Time: 14:56:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Mar 10 2021 14:56:10 GMT-0400 (Bolivia Time)
 * Last time updated: 14:56:10
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosInvoices = sequelize.define('aosInvoices', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      number: DataTypes.INTEGER,
      
      quote_number: DataTypes.INTEGER,
      
      
      
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
      
      status: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      template_ddown_c: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      quote_date: DataTypes.DATE,
      
      invoice_date: DataTypes.DATE,
      
      due_date: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      billing_account_id: DataTypes.CHAR,
      
      billing_contact_id: DataTypes.CHAR,
      
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
      tableName:'aos_invoices',
      timestamps: false,
    });
    aosInvoices.associate = (models) => {
      
    };
    return aosInvoices;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosInvoices", new Schema({
    
    number: {type: Number},
    
    quote_number: {type: Number},
    
    
    
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
    
    status: {type: String},
    
    
    description: {type: String},
    
    template_ddown_c: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    quote_date: {type: Date},
    
    invoice_date: {type: Date},
    
    due_date: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    billing_account_id: {type: String},
    
    billing_contact_id: {type: String},
    
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
    
    
  }),'aos_invoices');
  //</es-section>
