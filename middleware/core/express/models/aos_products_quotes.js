/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:21 GMT-0400 (Bolivia Time)
 * Time: 14:0:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:21 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:21
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const aosProductsQuotes = sequelize.define('aosProductsQuotes', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      number: DataTypes.INTEGER,
      
      
      
      part_number: DataTypes.STRING,
      
      discount: DataTypes.STRING,
      
      vat: DataTypes.STRING,
      
      parent_type: DataTypes.STRING,
      
      
      name: DataTypes.TEXT,
      
      description: DataTypes.TEXT,
      
      item_description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      currency_id: DataTypes.CHAR,
      
      parent_id: DataTypes.CHAR,
      
      product_id: DataTypes.CHAR,
      
      group_id: DataTypes.CHAR,
      
      
      
      product_qty: DataTypes.DECIMAL,
      
      product_cost_price: DataTypes.DECIMAL,
      
      product_cost_price_usdollar: DataTypes.DECIMAL,
      
      product_list_price: DataTypes.DECIMAL,
      
      product_list_price_usdollar: DataTypes.DECIMAL,
      
      product_discount: DataTypes.DECIMAL,
      
      product_discount_usdollar: DataTypes.DECIMAL,
      
      product_discount_amount: DataTypes.DECIMAL,
      
      product_discount_amount_usdollar: DataTypes.DECIMAL,
      
      product_unit_price: DataTypes.DECIMAL,
      
      product_unit_price_usdollar: DataTypes.DECIMAL,
      
      vat_amt: DataTypes.DECIMAL,
      
      vat_amt_usdollar: DataTypes.DECIMAL,
      
      product_total_price: DataTypes.DECIMAL,
      
      product_total_price_usdollar: DataTypes.DECIMAL,
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'aos_products_quotes',
      timestamps: false,
    });
    aosProductsQuotes.associate = (models) => {
      
    };
    return aosProductsQuotes;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("aosProductsQuotes", new Schema({
    
    number: {type: Number},
    
    
    
    part_number: {type: String},
    
    discount: {type: String},
    
    vat: {type: String},
    
    parent_type: {type: String},
    
    
    name: {type: String},
    
    description: {type: String},
    
    item_description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    currency_id: {type: String},
    
    parent_id: {type: String},
    
    product_id: {type: String},
    
    group_id: {type: String},
    
    
    
    product_qty: {type: mongoose.Types.Decimal128},
    
    product_cost_price: {type: mongoose.Types.Decimal128},
    
    product_cost_price_usdollar: {type: mongoose.Types.Decimal128},
    
    product_list_price: {type: mongoose.Types.Decimal128},
    
    product_list_price_usdollar: {type: mongoose.Types.Decimal128},
    
    product_discount: {type: mongoose.Types.Decimal128},
    
    product_discount_usdollar: {type: mongoose.Types.Decimal128},
    
    product_discount_amount: {type: mongoose.Types.Decimal128},
    
    product_discount_amount_usdollar: {type: mongoose.Types.Decimal128},
    
    product_unit_price: {type: mongoose.Types.Decimal128},
    
    product_unit_price_usdollar: {type: mongoose.Types.Decimal128},
    
    vat_amt: {type: mongoose.Types.Decimal128},
    
    vat_amt_usdollar: {type: mongoose.Types.Decimal128},
    
    product_total_price: {type: mongoose.Types.Decimal128},
    
    product_total_price_usdollar: {type: mongoose.Types.Decimal128},
    
    
    deleted: {type: Number},
    
    
  }),'aos_products_quotes');
  //</es-section>
